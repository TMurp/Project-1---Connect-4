# Project 1 Connect-4
Deployed Project Link
https://bit.ly/3pqC23t

 ## Overview & Concept

### Brief

This was my first project during my Software Engineering Immersive Bootcamp by General Assembly, it was completed 2 weeks into the course and the start of my coding journey.
The task was to create a grid based game within a timeframe of one week using Vanilla HTML, CSS and JavaScript.

### Concept

I chose to recreate Connect 4 because I wanted to tackle complex win condition logic. I used a fantasy theme of Dwarves vs Goblins to make the game less bland.
The objective of the game is to place four of your side’s discs in a row. If all spaces are filled without a victor the game will be a draw.

### Technologies Used

- HTML
- CSS
- JavaScript

## Approach Taken 

### Wireframing

I used excalidraw.com to create a wireframe for the website. I used this to visualise the front-end styling and functions needed.

![image10](https://user-images.githubusercontent.com/94997077/163822931-dc804ddd-b31a-4f0b-ba9f-cc1073861686.png)

### Building the Grid
The first step was to create a grid for the discs to be placed in, I considered changing the grid size but stuck with the traditional 7 x 6 grid used in Connect 4.
Below shows how I established the grid variables.

<img width="320" alt="image6" src="https://user-images.githubusercontent.com/94997077/163823123-1d7538a3-0b1f-494f-a462-ae503cf2c0f4.png">

I used querySelector to target my div with a class of grid (HTML).

<img width="201" alt="image7" src="https://user-images.githubusercontent.com/94997077/163823248-b1691125-13fb-4eb1-8ebe-96d66ae4a00d.png">


Next I wrote a function to create a div for each cell in the grid. The For loop creates a div with the cells number, this number will be used later for the win logic.

<img width="334" alt="image9" src="https://user-images.githubusercontent.com/94997077/163823296-c931e51e-96b9-480d-8942-e31954b8ec23.png">


### Starting the Game

Next I needed a function to start the game.
Here I invoke the createGrid function and function to play background music.
Then it sets the currentPlayer variable to dwarf, adds a pulse animation to the dwarf heading (to indicate it is their turn) and turns the start button invisible.

<img width="327" alt="image2" src="https://user-images.githubusercontent.com/94997077/163823365-cd16aba1-efce-4b73-8e8e-3272de144f77.png">

The start function uses some variables I’ve not covered yet, here they are for context.

<img width="354" alt="image11" src="https://user-images.githubusercontent.com/94997077/163823419-3932d8cd-2dbf-4b7d-ad97-4ed7e72ce71b.png">

### Disc placement and fall logic 

To add a disc to the grid I created a function that upon a cell being targeted with a mouse click, it would assign the selected cell’s class as the current player’s class. The if statement makes sure that the selected cell does not already contain either of the player classes.
It then invokes the functions to switch player and make the disc fall if there is nothing below it on the grid.

![image5](https://user-images.githubusercontent.com/94997077/163823567-a69c9b51-28f6-4a6a-8ce3-793c82dc30cc.png)

The disc fall function uses a while loop to check if the cell below the current one is empty (does not have a player class) and a valid cell (does not have a value of -1). If so it updates the currentPosition. 

![image8](https://user-images.githubusercontent.com/94997077/163823613-2964c733-a454-4459-9061-66649ec3a7e9.png)


### Player turn function

Once the player has placed their disc the addDisc function invokes the switchPlayer function. A simple bit of control flow to check the current player, invoke the win condition function and if not met switch the current player.

![image1](https://user-images.githubusercontent.com/94997077/163823777-2ee957d2-3248-4692-adaf-c46261aea8a3.png)

### Win Condition Logic

This was the most challenging function to write. It is a huge If Else statement that checks each cell’s class in relation to the cell that has most recently had a disc placed in. It also makes sure the cell value is not equal to -1 (meaning it is outside of the grid).

![image3](https://user-images.githubusercontent.com/94997077/163823816-a8ef177b-d5d8-4065-9832-254a0f2d86aa.png)

To check for a tie condition I created a function to track each time a disk was added. 

![image4](https://user-images.githubusercontent.com/94997077/163823836-dfd8df1a-40e2-492b-a72f-65eeea607411.png)

Once this value reaches the total grid cell count and none of the other win conditions have been met, a tie is declared.

## Challenges, Bugs & Wins

### Challenges

The win condition logic function took a long time to write, I spent a lot of time error-handling. Due to the way the cell values were assigned using a loop I ran into issues of false positive win conditions, so I had to write additional code to negate any false positives.

### Bugs

I encountered a bug with the win logic. When checking for a cell value that was either larger or less than the total cell count I would receive many undefined errors. To fix this I added code to check that any of the check cell values are not equal to -1. 

### Wins

I am sure the win logic function could be greatly refactored and improved but considering I wrote this only after a week of learning JavaScript I am proud of it. 

## Future Features + Key Learnings

### Future Changes / Improvements

Adding an option to play vs the computer. Adding AI logic would be a big task but very rewarding.
Improve game reload, try to allow a new game to begin without reloading the page.
Allow the player to select their team, currently dwarves always go first.

### Key Learnings

This project massively improved my understanding and confidence with JavaScript and using the DOM. 
Using multiple functions, their scope and ordering.
Control flow, the win logic was a huge learning experience.
Event listeners, I used the click event listener for three different purposes on this project.

### Contact

Email - tommurphyse@gmail.com

Social - linkedin.com/in/tom-j-murphy/

Project Link - https://bit.ly/3pqC23t

GitHub - github.com/TMurp
