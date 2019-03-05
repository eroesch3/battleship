



const block = document.querySelectorAll('div')
// console.log(block);


// function setPosition(ship){
for(let i = 21; i < block.length; i++) {
    block[i].addEventListener('click', function(event){
        console.log(event)
        block[i].classList.add("shot");
    })
}

// }




// block.addEventListener('click', function(event){
//     block.classList.add("shot");
//   }); 


// const block = document.querySelectorAll('div')

// for(let i = 21; i < block.length; i++) {
//     block[i].addEventListener('click', function(event){
//         console.log(event)
//         block.classList.add("shot");
//         // block.style.backgroundColor = "red";
//     })
// }


// 




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

