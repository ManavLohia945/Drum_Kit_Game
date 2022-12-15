function makeSound(key) {
  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); //HTMLMediaElement (search this on google) method of js
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;

    default:  var audio = new Audio("sounds/kick.mp3");
              audio.play();

  }
}

//Detecting button press
var numberOfDrumBtn = document.querySelectorAll(".drum").length;
for (var i = 0;i < numberOfDrumBtn;i++) {//to add event listener to every button we make use of for loop. now every button will make perform the same func just the sound will be diff
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick()
    {
      var btnText = this.innerHTML;
      makeSound(btnText);
      buttonAnimation(btnText);
    }


}
//detecting keyboard press
document.addEventListener("keydown",keyPress); //addEventListener is an higher order function
 //becoz it takes anothrer func (keyPess) as an argument and the keyPress function is called as CallBack function.

function keyPress(event){
  makeSound(event.key);
  buttonAnimation(event.key);
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {  //using anonmymus function
    activeButton.classList.remove("pressed");
  }, 100);

}
