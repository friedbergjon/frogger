

  const body = document.body;
  let frogPosition = {x: 7, y: 6}
  let car1Position = {x:16, y:3}
  let car2Position = {x:16, y:1}
  let car3Position = {x:16, y:5.5}
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
  car2.className = 'bus';
  body.appendChild(car2);
  car2.style.left = (car2Position.x * 100) + "px";
  car2.style.top = (car2Position.y * 100) + "px";
  
  let car3 = document.createElement('div');
  car3.className = 'carBlue';
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
  let busHeight = car2.offsetHeight;
  let busWidth = car2.offsetWidth;
  
  //  collision code :
  // // //  https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
  function collisionY1() {
  return ((frogPosition.y > car1Position.y -.5 && frogPosition.y < car1Position.y -.5 + (carHeight/100)))
  }
  function collisionX1() {
    return (frogPosition.x > car1Position.x && frogPosition.x < car1Position.x + (carWidth/100))
  
  }
  
  function collisionY2() {
    return ((frogPosition.y > car2Position.y -.5 && frogPosition.y < car2Position.y -.5 + (busHeight/100)))
    }
    function collisionX2() {
      return (frogPosition.x > car2Position.x && frogPosition.x < car2Position.x + (busWidth/100))
    
    }
  
    function collisionY3() {
      return ((frogPosition.y > car3Position.y -.5 && frogPosition.y < car3Position.y -.5 + (carHeight/100)))
      }
      function collisionX3() {
        return (frogPosition.x > car3Position.x && frogPosition.x < car3Position.x + (carWidth/100))
      
      }
  
  
    function winRound() {
        if (frogPosition.y > winPosition.y -1 && frogPosition.y < winPosition.y -1 + (carHeight/100)){
          alert("You Won The Game!!!! You're Amazing!!!");
          window.location.href='/index.html';
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
    
   }
   
  
   
  let makeCar1Drive = (x,y) => {
   
    let car1 = document.querySelector('.car');
     car1Position.x -= .2
     car1.style.left = `${(car1Position.x * 100)}px`;
     car1.style.top = `${(car1Position.y * 100)}px`;
     if(collisionX1()  && collisionY1()) {
       clearInterval(car1interval)
      alert("frogger died!");
      window.clearInterval(car1interval);
      //https://mdn.beonex.com/en/DOM/window.clearInterval.html/
      window.location.reload();
      
      
    }
  }
    
  
  let makeCar2Drive = (x,y) => {
      let car2 = document.querySelector('.bus');
      car2Position.x -= .25
      car2.style.left = `${(car2Position.x * 100)}px`;
      car2.style.top = `${(car2Position.y * 100)}px`;
      if(collisionX2()  && collisionY2()) {
        clearInterval(car2interval);
        alert("frogger died!");
        window.clearInterval(car2interval);
        window.location.reload();
      }
  }
  
   
  let makeCar3Drive = (x,y) => {    
      let car3 = document.querySelector('.carBlue');
      car3Position.x -= .35
      car3.style.left = `${(car3Position.x * 100)}px`;
      car3.style.top = `${(car3Position.y * 100)}px`;
      if(collisionX3()  && collisionY3()) {
        clearInterval(car3interval);
        alert("frogger died!");
        window.location.reload();
        //https://stackoverflow.com/questions/16955019/how-to-reload-a-page-after-the-ok-click-on-the-alert-page
      }
      
    }
   let car1interval =
  setInterval(() => {
    makeCar1Drive();
  
  }, 5);
  
   //Help from Mohammed in structuring interval as variable//
   let car2interval =
  setInterval(() => {
    makeCar2Drive();
  
   
    
  }, 10);
   
  
  let car3interval =
  setInterval(() => {
    makeCar3Drive();
  
  }, 15);
  
  
  setInterval(()=>{
  
  car1Position = {x:16, y:3}
  car2Position = {x:16, y:1}
  car3Position = {x:16, y:5.5}
    
   makeCar1Drive(); 
   makeCar2Drive();
   makeCar3Drive();
   
  },6000);
  
  
  