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
div2.style.left = (0.5 * window.innerWidth) + "px";
div2.style.top = (0.5 * window.innerHeight) + "px";

let div3 = document.createElement('div');
div3.className = 'car';
body.appendChild(div3);
div3.style.left = (0.5 * window.innerWidth) + "px";
div3.style.top = (0.2 * window.innerHeight) + "px";


setTimeout(function() {
  div2.style.transform = "translateX(-1600px)";
}, 200);



setTimeout(function() {
  div3.style.transform = "translateX(-800px)";
}, 200);
}

