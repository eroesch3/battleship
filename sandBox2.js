

// let sampleObj = {
//     column: "A",
//     row: 1,
//     ship: false,
//     inShot: false,
//     id: A1
// }

// adddocument.getElementById()

/* XXX BELOW WORKS SO USE IN CODE... to determine what 

let x = "A5";

x = parseInt(x[1]) + 2

console.log(x);

ABOVE WORKS
*/ 



let r = playerBattleShip.findIndex(shotloc)


//HERE 3:30PM
//XXXXXXXXXXX
//XXXXXXXXXXXX
//XXXXXXXXXXXXXX
//XXXXXXXXXX
// RETURN BELOW AFER COMMIT




// DUMP OF MY FUNCTIONS SWITCHED TO DECLARATIONS 6:05PM THURS .... CAN GO BACK TO THESE IF BREAKS


// const convertToIndex = function (inputID) {
//     let outIndexVal = columns.indexOf(inputID[0]) * 10 +
//         parseInt(inputID[1]) - 1
//     return outIndexVal
// };

/*


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


const buildTargetArray = function (y) {
    for (let n = 0; n < playerGrid.length; n++) {
        y.push(playerGrid[n].id);
    }
}




const registerPlayerShot = function (shotLoc) {
    playerShots.push(shotLoc);
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


const registerShot = function (shotLoc) {
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


const pcTakeShot = function () {
    switch (pcLastFourShots) {
        case
        XXXLONG ONE HERE



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




const playerTakeShot = function() {
    playerNewShot = prompt("Please enter the cell you want to fire on, column followed by row (e.g. C4)")
            console.log(playerNewShot)
            z = playerTargets.indexOf(playerNewShot)
            console.log(z)
            if (z === -1) {
            alert("This cell was already played or not on our grid, please select again")
            playerTakeShot();
        }   else {
            registerPlayerShot()
        };
    };






















