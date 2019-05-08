
function leftArrowPressed() {
  
  div.style.left = parseInt(div.style.left) - 5 + 'px';
  }

  function rightArrowPressed() {
  
  div.style.left = parseInt(div.style.left) + 5 + 'px';

  }

  function upArrowPressed() {
  
  div.style.top = parseInt(div.style.top) - 5 + 'px';
  }

  function downArrowPressed() {
  
  div.style.top = parseInt(div.style.top) + 5 + 'px';
  }

  function moveSelection(evt) {
      switch (evt.keyCode) {
          case 37:
          leftArrowPressed();
          break;
          case 39:
          rightArrowPressed();
          break;
          case 38:
          upArrowPressed();
          break;
          case 40:
          downArrowPressed();
          break;
          }
      };

window.onload = function() {

  const body = document.body;


let div = document.createElement('div');
  div.className ='frog';
  body.appendChild(div);
     div.style.left = (0.5 * window.innerWidth) + "px";
     div.style.top = (0.7 * window.innerHeight) + "px";


let div2 = document.createElement('div');
div2.className = 'car';
body.appendChild(div2);
div2.style.left = (0.6  * window.innerWidth) + "px";
div2.style.top = (0.5 * window.innerHeight) + "px";


let div3 = document.createElement('div');
div3.className = 'car';
body.appendChild(div3);
div3.style.left = (0.6 * window.innerWidth) + "px";
div3.style.top = (0.2 * window.innerHeight) + "px";

let div4 = document.createElement('div');
div4.className = 'car';
body.appendChild(div4);
div4.style.left = (0.6 * window.innerWidth) + "px";
div4.style.top = (0.7 * window.innerHeight) + "px";


let xAxis = 800;
let x1Axis = 800;
let x2Axis = 1000;

function moveCar(){
  div2.style.transform = `translateX(${xAxis}px)`;
  div3.style.transform = `translateX(${x1Axis}px)`;
  div4.style.transform = `translateX(${x2Axis}px)`;

}


//moveCar();
///Mohammed helped with getting the cars to loop//

setInterval(()=>{
  x2Axis-= 8;
  x1Axis-=10;
  xAxis-=5;
  moveCar();
},10)

setInterval(()=>{
  x2Axis = 900;
  x1Axis = 1000;
  xAxis = 800;
  moveCar();
},5000)


moveSelection()
}
// function carLoop() {
//   for (i=0; i<= div.length; i++){
// setInterval(function() {
//     div2.style.transform = "translateX(-1100px)";
// }, 4000);


// setInterval(function() {
//   div3.style.transform = "translateX(-1100px)";
// }, 4000);
// }
//     div3.style.transform = "translateX(-1100px)";
//     div2.style.transform = "translateX(-1100px)";



// }
// setInterval(carLoop, 1000)
// }
