

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

// KEY HERE DUMP DUMP DUMP

10:51PM REMOVED ALL THIS FROM BOTTOM OF battle.js

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
    allCells[t].EventListener('click', toggleListener())
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




















