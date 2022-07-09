var colors=[];
var rgbArray=[];
var pickedColor;
var boxes = document.querySelectorAll(".square");
var boxArray = Array.prototype.slice.call(boxes);
var colorDisplay = document.querySelector("#colorDisplay");
var newColor = document.querySelector("#new");
var message = document.querySelector("#message");
var header = document.querySelector("#header");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
load();

init();
function init(){
   var newColor = document.querySelector("#new");
   newColor.addEventListener("click", function(){
      load();
      message.innerHTML = "";
      header.style.backgroundColor = "steelblue";
      newColor.innerHTML = "new colors"
   })
}
  
   
    

function load(){
boxArray.forEach(generateRandomColor);
displayColor(colors);
pickColor(colors);
}

//to generate random colors
function generateRandomColor(color){//could write any variable one parameter is required in a function inside foreach which indicates the individual element in the array that it is called fromm ie boxes in this case 
   grc();
   color = "rgb("+rgbArray[0]+", "+rgbArray[1]+", "+rgbArray[2]+")"; 
   colors.push(color);
}

//to generate randon r g b values 
function grc(){
   rgbArray = [];
   for(var i = 0; i<3; i++){
      let randNumber= Math.random()*255;
      randNumber= Math.floor(randNumber);
      rgbArray.push(randNumber);
   }
}

//to display random color boxes
function displayColor(color){//could write colors as well u know can write anything because it is just catching the arguments passed
    for( var i = 0; i < boxArray.length; i++){
      //to give random colors to the boxes
      boxArray[i].style.backgroundColor = color[i];
    } 
}


//to pick random color to be guessed
 function pickColor(color){
   let randNumber = Math.random()*boxArray.length;
   randNumber = Math.floor(randNumber);
   pickedColor = color[randNumber];
   colorDisplay.textContent = pickedColor;
   colors = [];
}



//to check the guess
for( var i = 0; i < boxArray.length; i++){
   //to get the clicked color
   boxArray[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
         message.innerHTML = "Correct!!";
         newColor.innerHTML = "Play again?"
         colorChange(clickedColor);

         }else{
               message.innerHTML = "Try Again!!";
               this.style.backgroundColor = "black";
         }
  })
 }

 function colorChange(clickedColor){
   for( var i = 0; i < boxArray.length; i++){
      //to change the color of the boxes to correct color 
      boxArray[i].style.backgroundColor = clickedColor;
   }
 header.style.backgroundColor = clickedColor;
}

var easybtn = easy.addEventListener("click", forEasy);

function forEasy(){
   easy.classList.add("selected");
   hard.classList.remove("selected");
   if(boxArray.length > 3){
    for(var i = 3; i < boxArray.length; i++){
    boxArray[i].style.display = "none"; 
    }
   }
   boxArray.length = 3;
   load();
}

var hardbtn = hard.addEventListener("click", forHard);

function forHard(){
   boxArray.length = 6;
   hard.classList.add("selected");
   easy.classList.remove("selected");
   if(boxArray.length < 6){
      for(var i = 3; i < boxArray.length; i++){
      boxArray[i].style.display = "block"; 
      }
     }
    
   load(); 
}