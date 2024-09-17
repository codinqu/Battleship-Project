
// setting Global variables
const maxMines = 4;

const rowSize = 3;
// if you change this number the maxBattleSize variable will change the battlefield size

const maxBattleSize = rowSize * rowSize;

const gridContain = document.getElementById('gridBtns');

const mines = createMines(maxMines, maxBattleSize);
// mines variable is holding the function createMines



// declaring a function to get a random number
function getRandomInt(max) {

    let ihateMath = Math.random() * max;

    let istillhateMath = Math.floor(ihateMath);

    return istillhateMath;

}


// declaring a function for the onClick event
// giving my buttons there own unique ID
// parsing the eventId 
function onClick(event) {
    let eventId = event.target.id;
    console.log(eventId);

    let btn = event.target;
    console.log(btn);

    eventId = Number.parseInt(eventId);

    if(mines.includes(eventId)) {
        console.log("you hit a mine");

        btn.classList.add('mines')
    } // if this button id is = to the mine eventId then you hit a mine
    else{
        console.log("you live to see another day");

        btn.classList.add('clear');
    } // if this button id is /= to this mine eventId then you did not hit a mine
}


// declaring a function to create my mines 
function createMines(maxMines, maxBattleSize) {
    let mines = [];

    for (let i = 0; i < maxMines; i++) {
        
       let mineId = getRandomInt(maxBattleSize);

       mines.push(mineId);

    } // this is array will have four random numbers in it
        // maxMines variable was set to 4, mineId is getting a random number from MBSize
        // which is rowsize * rowsize
    // push those random chosen numbers from MBSize and push for of those to the array

    return mines;
    // return the array now with four random generated numbers that will signal the mines for that game
    // always put return at the end of your function
}


// declaring a function and calling it this time
// creating div, row, and buttons 
// nested for loop to look through row size
function main() {

    console.log("mines", mines);

    let count = 0;

    for (let i = 0; i < rowSize; i++) {
        
        let gridRow = document.createElement('div');

        gridRow.classList.add('row');
        // adding a row to the div class

        for (let j = 0; j < rowSize; j++) {
            
            let makeBtns = document.createElement('button');
            // creating a button(s)

            makeBtns.addEventListener("click",onClick);
            // adding an event listener to buttons and calling the onClick function to run when buttons are clicked

            makeBtns.id = count
            count++ // the buttons id count goes up by one

            gridRow.appendChild(makeBtns);
            
        } // appendChild to add btns at the end of row (parent?)
        
        gridContain.appendChild(gridRow);
        // appendChild to add the grid row to the end of the grid container (parent?)
    }
}

main();
// finally calling the function to run and execute the code inside of it