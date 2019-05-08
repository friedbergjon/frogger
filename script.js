

  const body = document.body;
let frogPosition = {x: 7, y: 6}
let div2Position = {x:8, y:3.5}
let div3Position = {x:8, y:1.3}
let div4Position = {x:8, y:5.6}
 
// function deadFrog() {
  
// }


let frog = document.createElement('div');
  frog.className ='frog';
  body.appendChild(frog);
     frog.style.left = (frogPosition.x * 100) + "px";
     frog.style.top = (frogPosition.y * 100) + "px";

    

let div2 = document.createElement('div');
div2.className = 'car';
body.appendChild(div2);
div2.style.left = (div2Position.x * 100) + "px";
div2.style.top = (div2Position.y * 100) + "px";


let div3 = document.createElement('div');
div3.className = 'car';
body.appendChild(div3);
div3.style.left = (div3Position.x * 100) + "px";
div3.style.top = (div3Position.y * 100) + "px";

let div4 = document.createElement('div');
div4.className = 'car';
body.appendChild(div4);
div4.style.left = (div4Position.x * 100) + "px";
div4.style.top = (div4Position.y * 100) + "px";


//blerf code for keyboard movement, went over in class//

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
        //  console.log(frogPosition)
         if (frogPosition.x === div2Position.x ||frogPosition.x === div3Position.x ||frogPosition.x === div4Position.x){
          xRight = true
        }
         moveCharacterTo();
     }
 }
 
 const moveLeft = () => {
     if (canMoveTo(frogPosition.x - .5, frogPosition.y)) {
         frogPosition.x -= .5;
         //help from Michael//
        //  console.log(frogPosition)
         //if frog coordinates equal car coordinates//
         if (frogPosition.x === div2Position.x ||frogPosition.x === div3Position.x ||frogPosition.x === div4Position.x){
          xLeft = true
         }
         moveCharacterTo();
        
     }
 }
 console.log(xLeft)
 const moveDown = () => {
     if (canMoveTo(frogPosition.x , frogPosition.y + .5)) {
         frogPosition.y += .5;
         console.log(frogPosition)
         moveCharacterTo();
     }
 }
 
 const moveUp = () => {
     if (canMoveTo(frogPosition.x , frogPosition.y - .5)) {
         frogPosition.y -= .5;
         console.log(frogPosition)
         moveCharacterTo();
     }
 }
 console.log(frogPosition.y)
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
 }


let xAxisCar1 = 800;
let xAxisCar2 = 800;
let xAxisCar3 = 1000;

// let yAxisCar1 = 500;
// let yAxisCar2 = 400;
// let yAxisCar3 = 300;


function moveCar(){
  div2.style.transform = `translateX(${xAxisCar1}px)`;
  div3.style.transform = `translateX(${xAxisCar2}px)`;
  div4.style.transform = `translateX(${xAxisCar3}px)`;
}

///Mohammed helped with getting the cars to loop//

setInterval(()=>{
  xAxisCar1-= 8;
  xAxisCar2-=10;
  xAxisCar3-=5;
  
  // yAxisCar1-=0.1;
  // yAxisCar2-=0.1;
  // yAxisCar3-=0.1;
  moveCar();
},10)

setInterval(()=>{
  xAxisCar1 = 900;
  xAxisCar2 = 1000;
  xAxisCar3 = 800;
 
  // yAxisCar1 = 500;
  // yAxisCar2 =400;
  // yAxisCar3 =300;
  moveCar();
},5000)

// collision detection


