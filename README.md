# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|May 6th| Project Description | Complete
|May 6th| Wireframes / Priority Matrix / Functional Components | Complete
|May 7th| Core Application Structure (HTML, CSS, etc.) | Incomplete
|May 7th| Pseudocode / actual code | Incomplete
|May 8th| Initial Clickable Model  | Incomplete
|May 9th | MVP | Incomplete
|May 10th| Present | Incomplete


## Project Description

The game frogger, grass on top and bottom of screen, road with lanes in the middle. Frog tries to hop from one end of screen to the other (bottom to top), if frog gets to top, win, level up

## Wireframes

[Wireframe 1](https://git.generalassemb.ly/friedbergjon/frogger/blob/23a3eb526026b24b471642ff12276e6aec536d8a/Project_1_pics/20190506_115001.jpg)

[Wireframe 2]
(https://git.generalassemb.ly/friedbergjon/frogger/blob/23a3eb526026b24b471642ff12276e6aec536d8a/Project_1_pics/20190506_115035.jpg)

[Wireframe 3]
(https://git.generalassemb.ly/friedbergjon/frogger/blob/23a3eb526026b24b471642ff12276e6aec536d8a/Project_1_pics/20190506_115044.jpg)



## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

[Matrix]
(https://git.generalassemb.ly/friedbergjon/frogger/blob/23a3eb526026b24b471642ff12276e6aec536d8a/Project_1_pics/20190506_122912.jpg)


#### MVP 

 -Collision between Frog and Car 5 hrs

-Displaying grass outside of window view with continual level increase 5 hrs

-Frog and car movement 4 hrs

-Changing and displaying score 3 hrs



#### PostMVP 

-Car-speed change with level increase 3 hrs
-Potholes in road 3 hrs
-graphics and animations 3 hrs



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Collision between Frog and Car| H | 5hrs|  10hrs |  2hrs |
| -Displaying grass outside of window view with continual level increase | H | 5hrs|  N/Ahrs |  hrs |
| -Frog and car movement| H | 4hrs| 10hrs | 2hrs |
| -Changing and displaying score| H | 3hrs| NAhrs | NAhrs |


## Additional Libraries
 Use this section to list all supporting libraries and their role in the project. 



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description 

//My first successful atempt at colision detection after Daniel's explanation
function collisionY1() {
return ((frogPosition.y > car1Position.y -.5 && frogPosition.y < car1Position.y -.5 + (carHeight/100)))
}
function collisionX1() {
  return (frogPosition.x > car1Position.x && frogPosition.x < car1Position.x + (carWidth/100))

}

// Below is where I called the collision detection function later in the program

let makeCar1Drive = (x,y) => {
 
  let car1 = document.querySelector('.car');
   car1Position.x -= .05
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
## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
The code above shows the solution I have after having mixed javascript code with CSS stying code. The frog was running off of Javascript and the cars were running off of CSS methods. Pixels were completely off until I defined the car's changing position in the same function that I translated it from CSS to Javascript.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
