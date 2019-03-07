
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
// let pcBattleShipOrigin = 0
// let pcBattleShipDirection = 0
// let playerCarrier = []
// let playerDestroyer = []



const convertToIndex = function (inputID) {
    let outIndexVal = columns.indexOf(inputID[0]) * 10 +
        parseInt(inputID[1]) - 1
    return outIndexVal
};


// XXX 10:44 TOOK const allCells = document.querySelectorAll from here




const buildGrid = function () {
    for (let i = 0; i < columns.length; i++) {
        for (let n = 0; n < rows.length; n++)
            for (let y = 0; y < ship.length; y++)
                for (let x = 0; x < inShot.length; x++) {
                    playerGrid.push({ column: columns[i], row: rows[n], ship: ship[y], inShot: inShot[x], })
                }
    }
}

const addKeyId = function () {
    for (let i = 0; i < playerGrid.length; i++) {
        playerGrid[i].id = playerGrid[i].column + playerGrid[i].row;
    }
}





// XXXX ED NEED TO PROBABLY ELIMINATE BELOW LINE
//   let r = playerBattleShip.findIndex(shotloc)



const buildTargetArray = function (y) {
    for (let n = 0; n < playerGrid.length; n++) {
        y.push(playerGrid[n].id);
    }
}





const registerShot = function (shotLoc) {
    pcShots.push(shotLoc);
    pcTargets.pop(shotLoc);
    let g = playerBattleShip.indexOf(shotLoc)
    if (g = -1) {
        pcLastFourShots.push(0);
        alert("Shot missed!")
        // XXX ED ADD OTHER THINGS TO DO WHEN PC MISSES LIKE PUT AN X
    } else {
        pcLastFourShots.push(1);
        alert("Shot hit target!")
        // XXX ED CHANGE BACKGROUND COLOR TO RED AND MAYBE PUT X TOO SHOWING SHOT REC'D
    };
};

const pcTakeShot = function () {
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

//             if (clue === 'yes') {


buildGrid();
addKeyId();
console.log(playerGrid);
console.log(convertToIndex("D3"));


buildTargetArray(playerTargets);
console.log('playerTargets' + playerTargets);

buildTargetArray(pcTargets);
console.log('pcTargets' + playerTargets);



let pcBattleShipOrigin = parseInt(Math.floor(Math.random() * 60));     //Math.floor(Math.random())*70);
let pcBattleShipDirection = parseInt(Math.floor(Math.random() * 1));   //parseInt(Math.floor(Math.random())*1)
let playerBattleShipOrigin = parseInt(Math.floor(Math.random() * 60));     //Math.floor(Math.random())*70);
let playerBattleShipDirection = parseInt(Math.floor(Math.random() * 1));   //parseInt(Math.floor(Math.random())*1)



console.log(pcBattleShipOrigin);
console.log(pcBattleShipDirection);
console.log(playerGrid[pcBattleShipOrigin].id);


const buildPcBattleShip = function () {
    pcBattleShip.push(playerGrid[pcBattleShipOrigin].id)
    pcBattleShip.push(playerGrid[pcBattleShipOrigin + 1].id)
    pcBattleShip.push(playerGrid[pcBattleShipOrigin + 2].id)
    pcBattleShip.push(playerGrid[pcBattleShipOrigin + 3].id)
    return pcBattleShip;
}


const buildPlayerBattleShip = function () {
    playerBattleShip.push(playerGrid[playerBattleShipOrigin].id)
    playerBattleShip.push(playerGrid[playerBattleShipOrigin + 1].id)
    playerBattleShip.push(playerGrid[playerBattleShipOrigin + 2].id)
    playerBattleShip.push(playerGrid[playerBattleShipOrigin + 3].id)
    return playerBattleShip;
}



function sumIt(a, b){
    return a += b
  }


const checkForWinner = function() {
    if (pcLastFourShots.reduce(sumIt) >= 4) {
        alert("They sank you BattleShip!")
    }   else if (playerLastFourShots.reduce(sumIt) >= 4) {
        alert("You sank their BattleShip.  You Win!")
    }   else {} ;
}










console.log(playerBattleShip);






buildPcBattleShip();
console.log(pcBattleShip);

buildPlayerBattleShip();
console.log(playerBattleShip);


pcTakeShot()
console.log(pcLastFourShots);
console.log(pcShots);







