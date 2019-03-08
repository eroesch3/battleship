
let cellClicked = null;
let totalClicked = 0;
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ship = [false]
let inShot = [false]
let playerGrid = []
let playerBattleShip = []
let pcBattleShip = []
let playerTargets = []
let playerShots = []
let pcTargets = []
let pcShots = []
let pcLastFourShots = [0, 0, 0, 0, 0]
let playerLastFourShots = [0, 0, 0, 0, 0]
let outIndexVal = 0
let pcNewShot = null
let playerNewShot = null
let playerPlays = 0
let z = null
let playButton = document.getElementById('play')

// let pcBattleShipOrigin = 0
// let pcBattleShipDirection = 0
// let playerCarrier = []
// let playerDestroyer = []



    


function convertToIndex(inputID) {
    let outIndexVal = columns.indexOf(inputID[0]) * 10 +
        parseInt(inputID[1]) - 1
    return outIndexVal
};

// XXX 10:44 TOOK const allCells = document.querySelectorAll from here

function buildGrid() {
    for (let i = 0; i < columns.length; i++) {
        for (let n = 0; n < rows.length; n++)
            for (let y = 0; y < ship.length; y++)
                for (let x = 0; x < inShot.length; x++) {
                    playerGrid.push({ column: columns[i], row: rows[n], ship: ship[y], inShot: inShot[x], })
                }
    }
}


function addKeyId() {
    for (let i = 0; i < playerGrid.length; i++) {
        playerGrid[i].id = playerGrid[i].column + playerGrid[i].row;
    }
}





// XXXX ED NEED TO PROBABLY ELIMINATE BELOW LINE
//   let r = playerBattleShip.findIndex(shotloc)



function buildTargetArray(y) {
    for (let n = 0; n < playerGrid.length; n++) {
        y.push(playerGrid[n].id);
    }
}



function registerPlayerShot(shotLoc) {
    console.log(shotLoc);  //6:19PM THURS  REMOVE THIS IF OK
    playerShots.push(shotLoc);
    console.log(playerShots.push(shotLoc));
    for(let k = 0; k < pcTargets.length; k++){ 
        if ( pcTargets[k] === shotLoc) {
     playerTargets.splice(k, 1); 
   }
}
    // playerTargets.pop(shotLoc);
    let g = pcBattleShip.indexOf(shotLoc)
    if (g === -1) {
        playerLastFourShots.push(0);
        alert("Your shot missed!")
        // XXX ED ADD OTHER THINGS TO DO WHEN PC MISSES LIKE PUT AN X
    } else {
        playerLastFourShots.push(1);
        alert("Your shot hit target!")
        // XXX ED CHANGE BACKGROUND COLOR TO RED AND MAYBE PUT X TOO SHOWING SHOT REC'D
    };
};


function registerShot(shotLoc) {
    // pcTargets.pop(shotLoc);
    pcShots.push(shotLoc);
    for(let j = 0; j < pcTargets.length; j++){ 
        if ( pcTargets[j] === shotLoc) {
     pcTargets.splice(j, 1); 
             }
        }
    let g = playerBattleShip.indexOf(shotLoc)
    if (g === -1) {
        pcLastFourShots.push(0);
        alert("The computer's shot missed!")
        // XXX ED ADD OTHER THINGS TO DO WHEN PC MISSES LIKE PUT AN X
    } else {
        pcLastFourShots.push(1);
        alert("The computer's shot hit your ship!")
        // XXX ED CHANGE BACKGROUND COLOR TO RED AND MAYBE PUT X TOO SHOWING SHOT REC'D
    };
};

function pcTakeShot() {
    switch (pcLastFourShots) {
        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 0):
            pcNewShot = pcTargets[Math.floor(Math.random() * pcTargets.length)];
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 1):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) - 1].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 1):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) - 1].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 1):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) - 1].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 1 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 0):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 4]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 0):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 3]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 1 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 1):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 1):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) - 1].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 0):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 2]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 0):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 3]) + 10].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 1):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 1 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 1):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 1 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 1):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) + 10].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 0 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 1 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 0):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 4]) - 10].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 1 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 0):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 2]) - 10].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 1 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 1):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) - 10].id;
            registerShot(pcNewShot);
            break;

        case
            (pcLastFourShots[pcLastFourShots.length - 5] === 1 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 1):
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) + 10].id;
            registerShot(pcNewShot);
            break;

        default:
            pcNewShot = pcTargets[Math.floor(Math.random() * pcTargets.length)];
            registerShot(pcNewShot);
            break;
    };
};

let pcBattleShipOrigin = parseInt(Math.floor(Math.random() * 60));     
let pcBattleShipDirection = parseInt(Math.floor(Math.random() * 1));   
let playerBattleShipOrigin = parseInt(Math.floor(Math.random() * 60)); 
let playerBattleShipDirection = parseInt(Math.floor(Math.random() * 1)); 



function buildPcBattleShip() {
    pcBattleShip.push(playerGrid[pcBattleShipOrigin].id)
    pcBattleShip.push(playerGrid[pcBattleShipOrigin + 1].id)
    pcBattleShip.push(playerGrid[pcBattleShipOrigin + 2].id)
    pcBattleShip.push(playerGrid[pcBattleShipOrigin + 3].id)
    return pcBattleShip;
}


function buildPlayerBattleShip() {
    playerBattleShip.push(playerGrid[playerBattleShipOrigin].id)
    playerBattleShip.push(playerGrid[playerBattleShipOrigin + 1].id)
    playerBattleShip.push(playerGrid[playerBattleShipOrigin + 2].id)
    playerBattleShip.push(playerGrid[playerBattleShipOrigin + 3].id)
    
    // for(let s = 0; s < playerBattleShip.length; s++) {
    //     allCells[i].addEventListener('click', function(event){
    //         allCells[i].classList.add("ship");                  
    //         cellClicked = event.target.id;                      
    //         playerBattleShip.push(cellClicked);
    //     }
    document.getElementById(playerBattleShip[0]).classList.add("ship");
    document.getElementById(playerBattleShip[1]).classList.add("ship");
    document.getElementById(playerBattleShip[2]).classList.add("ship");
    document.getElementById(playerBattleShip[3]).classList.add("ship");
    return playerBattleShip;

}

/////XXXXXXXXXXXXXXXXXXXXXX HERE 11:22

const listenersToGrid = function()  {
    const allCells = document.querySelectorAll('div')
    for(let i = 21; i < allCells.length; i++) {
        allCells[i].addEventListener('click', function(event){
            allCells[i].classList.add("ship");                  // OK
            cellClicked = event.target.id;                      //  OK
            playerBattleShip.push(cellClicked);                 //OK == NEED THE PUSH LINE SO NOT THE PROBLEM
            if (playerBattleShip.length >= 5){
                return playerBattleShip;
            } else {
                // listenersToGrid();
        };
            console.log(playerBattleShip);
            return playerBattleShip;
            })   
        }
        console.log(playerBattleShip);
        return playerBattleShip;

    };

/////XXXXXXXXXXXXXXXXXXXXXX HERE HERE 11:22




function sumIt(a, b){
    return a += b
  }

function checkForWinner() {
    if (pcLastFourShots.reduce(sumIt) >= 4) {
        alert("They sank you BattleShip!")
        playerPlays = 0
        return playerPlays
    }   else if (playerLastFourShots.reduce(sumIt) >= 4) {
        alert("You sank their BattleShip.  You Win!")
        playerPlays = 0
        return playerPlays
    }   else {} ;
}


function playerTakeShot() {
    playerNewShot = prompt("Please enter the cell you want to fire on, column followed by row (e.g. C4)")
            console.log(playerNewShot)
            z = playerTargets.indexOf(playerNewShot)
            console.log(z)
            if (z === -1) {
            alert("This cell was already played or not on our grid, please select again")
            playGame();
        }   else {
            registerPlayerShot(playerNewShot)
        };
    };





            
    //                     alert("You got a new rug to really tie your room together");
    //             }   else { alert("Aw, you're stuck with a dirty rug.");
    //                      }
    //             duder = "no";
    //             break;








function playGame() {


console.log(playerGrid);
// console.log(convertToIndex("D3"));

buildTargetArray(playerTargets);
console.log('playerTargets' + playerTargets);

buildTargetArray(pcTargets);
console.log('pcTargets' + playerTargets);

for (let s = 0; s <= 1000; s++) {

playerTakeShot()
console.log(playerLastFourShots);
console.log(playerShots);
checkForWinner();


pcTakeShot()
console.log(pcLastFourShots);
console.log(pcShots)
console.log(pcTargets);
checkForWinner();

}
}


//THIS IS WHERE PLAYGAME FUNCTION ENDS

buildGrid();
addKeyId();


buildPcBattleShip();
console.log(pcBattleShip);                                                                              

buildPlayerBattleShip();
console.log(playerBattleShip);

playButton.addEventListener('click', () => {
    playGame()
})



console.log(pcBattleShipOrigin);
console.log(pcBattleShipDirection);
// console.log(playerGrid[pcBattleShipOrigin].id);


// 3:58 thurs

console.log(playerBattleShip);








// XXXXXXXXXXX 






