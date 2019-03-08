
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
    playerTargets.pop(shotLoc);
    let g = pcBattleShip.indexOf(shotLoc)
    if (g === -1) {
        playerLastFourShots.push(0);
        alert("Shot missed!")
        // XXX ED ADD OTHER THINGS TO DO WHEN PC MISSES LIKE PUT AN X
    } else {
        playerLastFourShots.push(1);
        alert("Shot hit target!")
        // XXX ED CHANGE BACKGROUND COLOR TO RED AND MAYBE PUT X TOO SHOWING SHOT REC'D
    };
};


function registerShot(shotLoc) {
    pcShots.push(shotLoc);
    pcTargets.pop(shotLoc);
    let g = playerBattleShip.indexOf(shotLoc)
    if (g === -1) {
        pcLastFourShots.push(0);
        alert("Shot missed!")
        // XXX ED ADD OTHER THINGS TO DO WHEN PC MISSES LIKE PUT AN X
    } else {
        pcLastFourShots.push(1);
        alert("Shot hit target!")
        // XXX ED CHANGE BACKGROUND COLOR TO RED AND MAYBE PUT X TOO SHOWING SHOT REC'D
    };
};

function pcTakeShot() {
    switch (pcLastFourShots) {
        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 0:
            pcNewShot = pcTargets[Math.floor(Math.random() * pcTargets.length)];
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 1:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) - 1].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 1:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) - 1].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 1:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) - 1].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 1 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 0:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 4]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 0:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 3]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 1 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 1:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 1:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) - 1].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 && pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 0:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 2]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 0:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 3]) + 10].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 1 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 1:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 1 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 1:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) + 1].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 1 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 1:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) + 10].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 0 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 1 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 0:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 4]) - 10].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 1 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 0:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 2]) - 10].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 1 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 0 && pcLastFourShots[pcLastFourShots.length - 1] === 1:
            pcNewShot = playerGrid[convertToIndex(pcShots[pcShots.length - 1]) - 10].id;
            registerShot(pcNewShot);
            break;

        case
            pcLastFourShots[pcLastFourShots.length - 5] === 1 &&
            pcLastFourShots[pcLastFourShots.length - 4] === 0 && pcLastFourShots[pcLastFourShots.length - 3] === 0 && pcLastFourShots[pcLastFourShots.length - 2] === 1 && pcLastFourShots[pcLastFourShots.length - 1] === 1:
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
    return playerBattleShip;
}



function sumIt(a, b){
    return a += b
  }

function checkForWinner() {
    if (pcLastFourShots.reduce(sumIt) >= 4) {
        alert("They sank you BattleShip!")
        playerPlays = 0
    }   else if (playerLastFourShots.reduce(sumIt) >= 4) {
        alert("You sank their BattleShip.  You Win!")
        playerPlays = 0
    }   else {} ;
}


function playerTakeShot() {
    playerNewShot = prompt("Please enter the cell you want to fire on, column followed by row (e.g. C4)")
            console.log(playerNewShot)
            z = playerTargets.indexOf(playerNewShot)
            console.log(z)
            if (z === -1) {
            alert("This cell was already played or not on our grid, please select again")
            playerTakeShot();
        }   else {
            registerPlayerShot(playerNewShot)
        };
    };




/*
const playerTakeShot = function() {
    playerNewShot = prompt("Please enter the cell you want to fire on, column followed by row (e.g. C4)")
            console.log(playerNewShot)
            z = playerTargets.indexOf(playerNewShot)
            console.log(z)
            if (z = -1) {
            alert("This cell was already played or not on our grid, please select again")
            playerTakeShot();
        }   else {
            registerShot()
        };
    };
//XXXX CRITICAL:  4:28PM THURS ED MAY NEED TO call checkForWinner within registerShot function        
*/


            
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

playerTakeShot()
console.log(pcLastFourShots);
console.log(pcShots);

pcTakeShot()
console.log(pcLastFourShots);
console.log(pcShots);

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





// XXXXXXXXXXXXXXXX  10:41AM THURS

// const checkLength = function() {
//     if (playerBattleShip.length === 4){
//         return playerBattleShip;
//     } else {
//         buildPcBattleShip();
// };
// };




/*
const checkBattleShip = function () {
    // const allCells = document.querySelectorAll('div');
    console.log(playerBattleShip);
    for (let t = 21; t < allCells.length; t++) {
    allCells[t].removeEventListener('click', toggleListener())
}
};



const listenersToGrid = function () {
    const allCells = document.querySelectorAll('div')
    for (let i = 21; i < allCells.length; i++) {
        allCells[i].addEventListener('click', toggleListener (event))
            afterClick()}}
        
            

        const afterClick = function(){   
            allCells[i].classList.add("ship");                  // OK
            cellClicked = event.target.id
            totalClicked = totalClicked + 1
            playerBattleShip.push(cellClicked)                //OK == NEED THE PUSH LINE SO NOT THE PROBLEM
            if (totalClicked === 4) {
                checkBattleShip()
            }
        };

        

        
    
    // return playerBattleShip;

// return playerBattleShip;
// } else {
// listenersToGrid();

*/


/*  XXXXX RETURN TO THIS IF BLOWS UP... THURS 12:25PM

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

console.log(playerBattleShip);

//  XXXXX RETURN TO THIS IF BLOWS UP... THURS 12:25PM

const buildPlayerBattleShip = function () {
    alert("Please click on 4 consecutive cells (vertically or horizontally) to set your Battleship position");
    listenersToGrid();
    // playerBattleShip.push(.id)
    // playerBattleShip.push(playerGrid[pcBattleShipOrigin+1].id)
    // playerBattleShip.push(playerGrid[pcBattleShipOrigin+2].id)
    // playerBattleShip.push(playerGrid[pcBattleShipOrigin+3].id)

    // const checkLength = function() {
    //     if (playerBattleShip.length === 4){
    //         return playerBattleShip;
    //     } else {
    //         buildPcBattleShip();
    // };
    return playerBattleShip;
};
//setInterval(checkLength(), 15000);

*/

/*
const listenersToGrid = function()  {
    const allCells = document.querySelectorAll('div')
    for(let i = 21; i < allCells.length; i++) {
        allCells[i].addEventListener('click', function(event){
            allCells[i].classList.add("ship");
            cellClicked = event.target.id;
            playerBattleShip.push(cellClicked);
            console.log(playerBattleShip);
            })   
        }
        console.log(playerBattleShip);
        return playerBattleShip;

    };

console.log(playerBattleShip);


const buildPlayerBattleShip = function() {
    alert("Please click on 4 consecutive cells (vertically or horizontally) to set your Battleship position");
    listenersToGrid();
    // playerBattleShip.push(.id)
    // playerBattleShip.push(playerGrid[pcBattleShipOrigin+1].id)
    // playerBattleShip.push(playerGrid[pcBattleShipOrigin+2].id)
    // playerBattleShip.push(playerGrid[pcBattleShipOrigin+3].id)
    
        const checkLength = function() {
            if (playerBattleShip.length === 4){
                return playerBattleShip;
            } else {
                buildPcBattleShip();
        };
    };
    //setInterval(checkLength(), 15000);

};

*/




/*

const buildPcBattleShip = function() {
    // If (pcBattleShipDirection === 0) {
    pcBattleShip.push(playerGrid[pcBattleShipOrigin].id),
    pcBattleShip.push(playerGrid[pcBattleShipOrigin+1].id),
    pcBattleShip.push(playerGrid[pcBattleShipOrigin+2].id),
    pcBattleShip.push(playerGrid[pcBattleShipOrigin+3].id),
//     } else {
//     pcBattleShip.push(playerGrid[pcBattleShipOrigin].id),
//     pcBattleShip.push(playerGrid[pcBattleShipOrigin+10].id),
//     pcBattleShip.push(playerGrid[pcBattleShipOrigin+20].id),
//     pcBattleShip.push(playerGrid[pcBattleShipOrigin+30].id),
// };
};
 
*/  // XXXXX ED RETURN HERE AND BORROW IF THEN STRUCTURE IF TIME PERMITS  THURS 10:41AM



// buildPcBattleShip();

//XXX ED MAKE IT PUSH 0 OR 1 FOR MISS OR HITpcLastFourShots.push(loc);


// XXX STARTED TO ADAPT THIS CODE TO BE THE WHILE LOOP SURROUNDING THE GAME AND SWITCH STATEMENT BTWN ALL THE DIFFERENT SHIPS
// let player = undefined;

// player = prompt("Would you like to play Battleship?  Please answer 'yes' if so");

// while (player === "yes") {

//     let placeShip = parseInt(prompt("It's time to deploy your fleet by selecting cells, 5 for the Carrier, 4 for the Battleship, 3 for Destroyer and Sub, and 2 for the Patrol Boat.  Please enter which ship you want to deploy now, the Carrier (enter 1); Battleship (2); Destroyer (3); Sub (4) or Patrol Boat (5).  Enter the number 6 to restart"));
    // ED XXX ADD CODE TO RESTART AT 6

    // switch(placeShip) {
    //     case 1: 

    //         let clue = prompt("Did you find a clue who stole your car, yes or no?");
    //             if (clue === 'yes') {
    //                     alert("Sorry about the smell but at least you got your car back");
    //             }   else { alert("They've got the police department working in shifts to find your car.  Hitch a ride with Walter for now.");
    //         }
    //             duder = "no";
    //             break;

    //     case 2: 
    //         let confront = prompt("Do you want to find this Lebowski, the millionaire, yes or no?")
    //             if (confront === 'yes') {
    //                     alert("You got a new rug to really tie your room together");
    //             }   else { alert("Aw, you're stuck with a dirty rug.");
    //                      }
    //             duder = "no";
    //             break;
    //     case 3: 
    //         let partner = prompt("You're running late to the league match, pick up Donny or Walter on the way?");
    //             if (partner === 'Walter') {
    //                     alert("You forfeited because of Walter, Liam and Jesus advanced instead");
    //             }   else { alert("Donny was throwing rocks tonight, you advanced to the round robin!");
    //                      }
    //             duder = "no";
    //             break;                 

    //     default: 
    //         alert("Great choice, Maude is nice and has friends like Knox Harrington, the video artist");
    //         duder = "no";             
    // }



//     player = prompt("Would you like to role play again?  Please answer 'yes' if so.");
// }
// alert("Thanks for playing, Admiral!");





/*

 duck.addEventListener("click", () => {
    duck.classList.add("shot");
    // setTimeout(function(){ body.querySelector('.duck').remove(); }, 1000);
    setTimeout(function(){ duck.remove(); }, 1000);
  });

   return duck
*/


/*
const buttons = document.querySelectorAll('li')

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event){
        console.log(event)
        document.body.style.backgroundColor = event.target.className
    })
}

*/


