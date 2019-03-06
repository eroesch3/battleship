
let cellClicked = null;
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ship = [false]
let inShot = [false]
let playerGrid  = []
let playerBattleShip = []
let pcBattleShip = []
let playerTargets = []
let playerShots = []
let pcTargets = []
let pcShots = []
// let playerCarrier = []
// let playerDestroyer = []






// XXX THIS SECTION ADDS EVENT LISTENERS TO THE GRID AND CHANGES CLASS TO TEMP "SHOT"  
// XXX NEXT STEP HERE IS TO PUT INTO FUNCTION THAT CAN BE CALLED FOR EACH TYPE OF SHIP
// console.log(block);
// function setPosition(ship){


// console.log(block);


//XXX ED MAYBE ADD SETINTERVAL... PERHAPS NOT REFRESHING FAST ENOUGH TO CAPTURE EACH CLICK

// function setPosition(ship){

// setInterval(function(){
//     moveDuck(duck)
//     }, 1000)

const block = document.querySelectorAll('div')
for(let i = 21; i < block.length; i++) {
    block[i].addEventListener('click', function(event){
        // console.log(event);
        block[i].classList.add("ship");
        // console.log('id: ', event.target.id)
        // console.log(event)
        cellClicked = event.target.id;
        playerBattleShip.push(cellClicked);
        console.log(playerBattleShip);
    })
}


const buildGrid = function() {    
    for (let i = 0; i < columns.length; i++) {
      for (let n = 0; n < rows.length; n++)
      for (let y = 0; y < ship.length; y++)
      for (let x = 0; x < inShot.length; x++) {
          playerGrid.push({column: columns[i], row: rows[n], ship: ship[y], inShot: inShot[x], })
      }      
    }      
  }  

const addKeyId = function() {
    for(let i = 0; i < playerGrid.length; i++) {
        playerGrid[i].id = playerGrid[i].column + playerGrid[i].row;
        }
    }






  buildGrid();
  addKeyId();
  console.log(playerGrid);


  const buildPlayerTargets = function() {
    for(let n = 0; n < playerGrid.length; n++) {
        playerTargets.push(playerGrid[n].id);
        // console.log(playerGrid[n].id);
            // console.log('id: ', event.target.id)
            // console.log(event)
           }
        }
    
    buildPlayerTargets();
    console.log(playerTargets);
    









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

