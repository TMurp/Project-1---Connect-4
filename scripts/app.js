function init(){
  // --- ELEMENTS
  const grid = document.querySelector('.grid')
  const width = 7
  const height = 6
  const cellCount = width * height
  const cells = []
  const button = document.querySelector('.button')
  const dwarf = 'dwarf'
  const goblin = 'goblin'
  let currentPlayer = null
  let currentPosition = null

  //SOUND ELEMENTS
  const dwarfClick = document.getElementById('dwarf-click')
  const goblinClick = document.getElementById('goblin-click')
  const bgMusic = document.getElementById('bg-music')
  const dwarfLaugh = document.getElementById('dwarf-laugh')
  const goblinLaugh = document.getElementById('goblin-laugh')
  
  //ANIMATION & IMAGE ELEMENTS
  const goblinTitle = document.getElementById('goblin-h2')
  const dwarfTitle = document.getElementById('dwarf-h2')
  const dwarfWinImg = document.createElement('img')
  dwarfWinImg.src = 'assets/dwarfcelebrate.jpeg'
  dwarfWinImg.width = '600'
  const dwarfWinTxt = document.createTextNode('Dwarves Win!')
  dwarfWinTxt.className = 'dwarf-win'
  const goblinWinImg = document.createElement('img')
  goblinWinImg.src = 'assets/goblin-win.jpeg'
  goblinWinImg.width = '600'

  // --- FUNCTIONS  
  //Function for creating a grid.
  function createGrid(){
    for (let i = 0; i < cellCount; i++) { 
      const cell = document.createElement('div') 
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
  }
  // Function for game start.
  function start(){
    playBgMusic()
    currentPlayer = dwarf
    dwarfTitle.classList.toggle('pulse-dwarf')
    button.classList.toggle('button-invis')
    // dwarfWinImg.remove()
    // goblinWinImg.remove()
    createGrid()
    console.log('Game Started')
  }
  // Function for disc appear. - On hover.
  function hoverDiscEnter(e){
    console.log('hovered -->', e.target)
    e.target.classList.toggle(currentPlayer)
  }
  // //Function for removing disc on hover.
  // function hoverDiscLeave(e){
  //   e.target.classList.add(currentPlayer)
  // }
  //Function for mouse click sound effect.
  function clickNoise(){
    if (currentPlayer === dwarf){
      dwarfClick.volume = 0.3
      dwarfClick.play()
    } else if (currentPlayer === goblin){
      goblinClick.volume = 0.3
      goblinClick.play()
    }
  }
  //Function for Background Music
  function playBgMusic(){
    bgMusic.loop = true
    bgMusic.volume = 0.3
    bgMusic.play()
  }
  // Function for adding disc to grid. - When clicked.
  function addDisc(e){
    if (e.target.classList.contains(dwarf) || e.target.classList.contains(goblin)){
      console.log('Invalid disc placement')
    } else {
      e.target.classList.add(currentPlayer)
      currentPosition = cells.indexOf(e.target)
      console.log('Disc added -->', e.target)
      console.log('Current position -->', currentPosition)
      // setInterval(discFall, 50)
      clickNoise()
      discFall()
      switchPlayer()
      console.log('Player switch')
    } 
  }
  // Function to moves disc from selected column downward to furthest row available.
  function discFall(){
    while (cells[currentPosition + 7] !== cells[-1] && !cells[currentPosition + 7].classList.contains(dwarf) && !cells[currentPosition + 7].classList.contains(goblin)){
      cells[currentPosition].classList.remove(currentPlayer) 
      currentPosition = currentPosition + 7
      cells[currentPosition].classList.add(currentPlayer) 
      console.log('Updated position -->', currentPosition)
    } 
  }
  // Function for alternating player turns.
  function switchPlayer(){
    if (currentPlayer === dwarf){
      checkWin()
      // checkTie()
      currentPlayer = goblin
      goblinTitle.classList.toggle('pulse-goblin')
      dwarfTitle.classList.toggle('pulse-dwarf')
    } else if (currentPlayer === goblin) {
      checkWin()
      // checkTie()
      currentPlayer = dwarf
      goblinTitle.classList.toggle('pulse-goblin')
      dwarfTitle.classList.toggle('pulse-dwarf')
    }
  }
  // Function for win condition logic. - Check grid div elements for relative positions.
  function checkWin(){
    if (cells[currentPosition + width] !== cells[-1] && cells[currentPosition + width].classList.contains(currentPlayer) && cells[currentPosition + (width * 2)] !== cells[-1] && cells[currentPosition + (width * 2)].classList.contains(currentPlayer) && cells[currentPosition + (width * 3)] !== cells[-1] && cells[currentPosition + (width * 3)].classList.contains(currentPlayer)){
      displayWinner()
    } else if (currentPosition % width <= 3 && cells[currentPosition + 1] !== cells[-1] && cells[currentPosition + 1].classList.contains(currentPlayer) && cells[currentPosition + 2] !== cells[-1] && cells[currentPosition + 2].classList.contains(currentPlayer) && cells[currentPosition + 3] !== cells[-1] && cells[currentPosition + 3].classList.contains(currentPlayer)){
      displayWinner()
    } else if (currentPosition % width >= 3 && cells[currentPosition - 1] !== cells[-1] && cells[currentPosition - 1].classList.contains(currentPlayer) && cells[currentPosition - 2] !== cells[-1] && cells[currentPosition - 2].classList.contains(currentPlayer) && cells[currentPosition - 3] !== cells[-1] && cells[currentPosition - 3].classList.contains(currentPlayer)){
      displayWinner() 
    } else if (currentPosition % width !== 0 && currentPosition % width !== 5 && currentPosition % width !== 6 && cells[currentPosition - 1] !== cells[-1] && cells[currentPosition - 1].classList.contains(currentPlayer) && cells[currentPosition + 1] !== cells[-1] && cells[currentPosition + 1].classList.contains(currentPlayer) && cells[currentPosition + 2] !== cells[-1] && cells[currentPosition + 2].classList.contains(currentPlayer)){
      displayWinner()
    } else if (currentPosition % width !== 0 && currentPosition % width !== 1 && currentPosition % width !== 6 && cells[currentPosition - 2] !== cells[-1] && cells[currentPosition - 2].classList.contains(currentPlayer) && cells[currentPosition - 1] !== cells[-1] && cells[currentPosition - 1].classList.contains(currentPlayer) && cells[currentPosition + 1] !== cells[-1] && cells[currentPosition + 1].classList.contains(currentPlayer)){
      displayWinner()
    } else if (currentPosition % width <= 3 && cells[currentPosition + 8] !== cells[-1] && cells[currentPosition + 8].classList.contains(currentPlayer) && cells[currentPosition + 16] !== cells[-1] && cells[currentPosition + 16].classList.contains(currentPlayer) && cells[currentPosition + 24] !== cells[-1] && cells[currentPosition + 24].classList.contains(currentPlayer)){
      displayWinner()
    } else if (currentPosition % width !== 0 && currentPosition % width !== 5 && currentPosition % width !== 6 && cells[currentPosition - 8] !== cells[-1] && cells[currentPosition - 8].classList.contains(currentPlayer) && cells[currentPosition + 8] !== cells[-1] && cells[currentPosition + 8].classList.contains(currentPlayer) && cells[currentPosition + 16] !== cells[-1] && cells[currentPosition + 16].classList.contains(currentPlayer)){
      displayWinner()
    } else if (currentPosition % width !== 0 && currentPosition % width !== 1 && currentPosition % width !== 6 && cells[currentPosition - 8] !== cells[-1] && cells[currentPosition - 8].classList.contains(currentPlayer) && cells[currentPosition - 16] !== cells[-1] && cells[currentPosition - 16].classList.contains(currentPlayer) && cells[currentPosition + 8] !== cells[-1] && cells[currentPosition + 8].classList.contains(currentPlayer)){  
      displayWinner()
    } else if (currentPosition % width >= 3 && cells[currentPosition - 8] !== cells[-1] && cells[currentPosition - 8].classList.contains(currentPlayer) && cells[currentPosition - 16] !== cells[-1] && cells[currentPosition - 16].classList.contains(currentPlayer) && cells[currentPosition - 24] !== cells[-1] && cells[currentPosition - 24].classList.contains(currentPlayer)){
      displayWinner()
    } else if (currentPosition % width <= 3 && cells[currentPosition - 6] !== cells[-1] && cells[currentPosition - 6].classList.contains(currentPlayer) && cells[currentPosition - 12] !== cells[-1] && cells[currentPosition - 12].classList.contains(currentPlayer) && cells[currentPosition - 18] !== cells[-1] && cells[currentPosition - 18].classList.contains(currentPlayer)){
      displayWinner()
    } else if (currentPosition % width !== 0 && currentPosition % width !== 5 && currentPosition % width !== 6 && cells[currentPosition + 6] !== cells[-1] && cells[currentPosition + 6].classList.contains(currentPlayer) && cells[currentPosition - 6] !== cells[-1] && cells[currentPosition - 6].classList.contains(currentPlayer) && cells[currentPosition - 12] !== cells[-1] && cells[currentPosition - 12].classList.contains(currentPlayer)){
      displayWinner()
    } else if (currentPosition % width !== 0 && currentPosition % width !== 1 && currentPosition % width !== 6 && cells[currentPosition + 12] !== cells[-1] && cells[currentPosition + 12].classList.contains(currentPlayer) && cells[currentPosition + 6] !== cells[-1] && cells[currentPosition + 6].classList.contains(currentPlayer) && cells[currentPosition - 6] !== cells[-1] && cells[currentPosition - 6].classList.contains(currentPlayer)){
      displayWinner()
    } else if (currentPosition % width >= 3 && cells[currentPosition + 6] !== cells[-1] && cells[currentPosition + 6].classList.contains(currentPlayer) && cells[currentPosition + 12] !== cells[-1] && cells[currentPosition + 12].classList.contains(currentPlayer) && cells[currentPosition + 18] !== cells[-1] && cells[currentPosition + 18].classList.contains(currentPlayer)){
      displayWinner()
    }
  }
  // Function for tie condition logic. - Full grid and win condition not met.
  // function checkTie(classList){
  //   if (cells.every(classList) === dwarf || goblin){
  //     return true,
  //     console.log('Tie!')
  //   }
  // }
  //Remove Grid Timeout Function
  function removeGridTimeout(){
    setTimeout(removeGrid, 1000)
  }
  //Remove grid Function
  function removeGrid(){
    grid.remove()
  }
  //Reload page Timeout Function 
  function reloadTimeout(){
    setTimeout(reload, 6000)
  }
  //Reload page function
  function reload(){
    location.reload()
  }
  //Dwarf Win Timeout Function
  function addDwarfBgTimeout(){
    setTimeout(addDwarfBg, 1000)
  }
  //Function for adding winner picture.
  function addDwarfBg(){
    document.querySelector('.grid-wrapper').appendChild(dwarfWinImg)
    document.querySelector('.grid-wrapper').style.border = '2px solid lightgray'
    document.querySelector('.dwarf-win-text').classList.toggle('dwarf-win')
    // button.classList.toggle('button-invis')
  }
  //Goblin Win Timeout Function
  function addGoblinBgTimeout(){
    setTimeout(addGoblinBg, 1000)
  }
  //Function for adding Goblin Winner Picture
  function addGoblinBg(){
    document.querySelector('.grid-wrapper').appendChild(goblinWinImg)
    document.querySelector('.grid-wrapper').style.border = '2px solid greenyellow'
    document.querySelector('.goblin-win-text').classList.toggle('goblin-win')
    // button.classList.toggle('button-invis')
  }
  // Function for displaying winner! - Remove/overlay the grid with
  function displayWinner(){
    removeGridTimeout()
    reloadTimeout()
    if (currentPlayer === dwarf){
      dwarfLaugh.volume = 0.3
      dwarfLaugh.play()
      addDwarfBgTimeout()
      goblinTitle.classList.toggle('pulse-goblin')
    } else if (currentPlayer === goblin){
      goblinLaugh.volume = 0.3
      goblinLaugh.play()
      addGoblinBgTimeout()
      dwarfTitle.classList.toggle('pulse-dwarf')
      document.querySelector('.dwarf-win-text').remove()
    }
  }
  // --- EVENTS
  grid.addEventListener('mouseenter', hoverDiscEnter)
  // grid.addEventListener('mouseleave', hoverDiscLeave)
  grid.addEventListener('click', addDisc)
  button.addEventListener('click', start)
}

window.addEventListener('DOMContentLoaded', init)
