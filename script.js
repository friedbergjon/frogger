

  const body = document.body;
let frogPosition = {x: 7, y: 6}
let car1Position = {x:16, y:3.5}
let car2Position = {x:16, y:1.5}
let car3Position = {x:16, y:5}
let winPosition =  {x:16, y:.5}
 


let frog = document.createElement('div');
  frog.className ='frog';
  body.appendChild(frog);
     frog.style.left = (frogPosition.x * 100) + "px";
     frog.style.top = (frogPosition.y * 100) + "px";


    

let car1 = document.createElement('div');
car1.className = 'car';
body.appendChild(car1);
car1.style.left = (car1Position.x * 100) + "px";
car1.style.top = (car1Position.y * 100) + "px";


let car2 = document.createElement('div');
car2.className = 'car';
body.appendChild(car2);
car2.style.left = (car2Position.x * 100) + "px";
car2.style.top = (car2Position.y * 100) + "px";

let car3 = document.createElement('div');
car3.className = 'car';
body.appendChild(car3);
car3.style.left = (car3Position.x * 100) + "px";
car3.style.top = (car3Position.y * 100) + "px";

let win = document.createElement('div');
win.className = 'car';
body.appendChild(win);
win.style.left = (winPosition.x * 100) + "px";
win.style.top = (winPosition.y * 100) + "px";


//code to attain height of frog for collision detection//
// https://stackoverflow.com/questions/294250/how-do-i-retrieve-an-html-elements-actual-width-and-height
let frogHeight = frog.offsetHeight;
let frogWidth = frog.offsetWidth;
let carWidth = car1.offsetWidth;
let carHeight = car1.offsetHeight;


//  collision code :
// // //  https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
// function collisionY() {
// return ((frogPosition.y > car1Position.y -.5 && frogPosition.y < car1Position.y -.5 + (carHeight/100)))
// }
// function collisionX() {
//   return (frogPosition.x > car1Position.x && frogPosition.x < car1Position.x + (carWidth/100))

// }


  function winRound() {
      if (frogPosition.y > winPosition.y -1 && frogPosition.y < winPosition.y -1 + (carHeight/100)){
        alert("You Win!");
      }}

// //blerf code for keyboard movement, went over in class//

const isCoordinateInGrid = (x, y) => {

  return !(x < 0 || y < 0 || x*100 > window.innerWidth  || y*100 > window.innerHeight );

}

const canMoveTo = (x, y) => {
    if (!isCoordinateInGrid(x, y)) {

         return false;
     }
     return true;
 }
 
 const moveRight = () => {
     if (canMoveTo(frogPosition.x + .5, frogPosition.y)) {
       
         frogPosition.x += .5;
         frog.setAttribute('style','transform:rotate(90deg)');
     
         moveCharacterTo();
     }
 }
 
 const moveLeft = () => {
     if (canMoveTo(frogPosition.x - .5, frogPosition.y)) {
         frogPosition.x -= .5;
         frog.setAttribute('style','transform:rotate(270deg)');
        
        
         
         moveCharacterTo();
     }
     }
 
    
 const moveDown = () => {
     if (canMoveTo(frogPosition.x , frogPosition.y + .5)) {
         frogPosition.y += .5;
         frog.setAttribute('style','transform:rotate(180deg)');
         moveCharacterTo();
     }
 }
 
 const moveUp = () => {
     if (canMoveTo(frogPosition.x , frogPosition.y - .5)) {
         frogPosition.y -= .5;
         frog.setAttribute('style','transform:rotate(360deg)');
         moveCharacterTo();
     }
 }
 
 document.body.addEventListener('keydown', evt => {
     const keyCode = evt.keyCode;
  
     if ([37, 38, 39, 40].includes(keyCode)) {
         evt.preventDefault();
     }
     switch (keyCode) {
         case 37:
         moveLeft();
         break;
       case 38:
         moveUp();
         break;
       case 39:
         moveRight();
         break;
       case 40:
         moveDown();
         break;
     }
 })

 //with help from Rachel//
 const moveCharacterTo = (x, y) => {
  const charElement = document.querySelector('.frog');
  charElement.style.left = `${(frogPosition.x * 100)}px`;
  charElement.style.top = `${(frogPosition.y * 100)}px`;
  winRound();
  // collisionY();
  // collisionX();
 }
 

 
let makeCar1Drive = (x,y) => {
 
  let car1 = document.querySelector('.car');
   car1Position.x -= .5
   car1.style.left = `${(car1Position.x * 100)}px`;
   car1.style.top = `${(car1Position.y * 100)}px`;

}
  

let makeCar2Drive = (x,y) => {
    let car2 = document.querySelector('.car');
    car2Position.x -= .5
    car2.style.left = `${(car2Position.x * 100)}px`;
    car2.style.top = `${(car2Position.y * 100)}px`;
   
}

 
let makeCar3Drive = (x,y) => {    
    let car3 = document.querySelector('.car');
    car3Position.x -= .5
    car3.style.left = `${(car3Position.x * 100)}px`;
    car3.style.top = `${(car3Position.y * 100)}px`;
  }

setInterval(() => {
  makeCar1Drive();


  
}, 100);


setInterval(() => {
  makeCar2Drive();

 
  
}, 200);


setInterval(() => {
  makeCar3Drive();

 
  
}, 150);





