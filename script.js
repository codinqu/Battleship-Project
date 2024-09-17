
const maxMines = 4;

const rowSize = 3;

const maxBattleSize = rowSize * rowSize;

const gridContain = document.getElementById('gridBtns');

const mines = createMines(maxMines, maxBattleSize);


function getRandomInt(max) {

    let ihateMath = Math.random() * max;

    let istillhateMath = Math.floor(ihateMath);

    return istillhateMath;

}



function onClick(event) {
    let eventId = event.target.id;

    let btn = event.target;

    eventId = Number.parseInt(eventId);

    if(mines.includes(eventId)) {
        console.log("you hit a mine");

        btn.classList.add('mines')
    }
    else{
        console.log("you live to see another day");

        btn.classList.add('clear');
    }
}


function createMines(maxMines, maxBattleSize) {
    let mines = [];

    for (let i = 0; i < maxMines; i++) {
        
       let mineId = getRandomInt(maxBattleSize);

       mines.push(mineId);

    }

    return mines;
}



function main() {

    console.log("mines", mines);

    let count = 0;

    for (let i = 0; i < rowSize; i++) {
        
        let gridRow = document.createElement('div');

        gridRow.classList.add('row');

        for (let j = 0; j < rowSize; j++) {
            
            let makeBtns = document.createElement('button');

            makeBtns.addEventListener("click",onClick);

            makeBtns.id = count
            count++

            gridRow.appendChild(makeBtns);
            
        }
        
        gridContain.appendChild(gridRow);
    }
}

main();