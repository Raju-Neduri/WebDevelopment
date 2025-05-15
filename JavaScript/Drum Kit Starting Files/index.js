function playSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/crash.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "d":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "k":
      new Audio("sounds/snare.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      console.log("Unknown key:", key);
  }
}

// When a drum button is clicked
let buttons = document.getElementsByClassName("drum");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonInnerText = this.innerText;
    playSound(buttonInnerText);
  });
}

// When a keyboard key is pressed
document.addEventListener("keydown", function (event) {
  playSound(event.key.toLowerCase());
});

// When "t" key is pressed, play a melody
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "t") {
    let tune = ["a", "w", "s", "d", "j", "l", "k"];
    for (let i = 0; i < tune.length; i++) {
      setTimeout(() => {
        playSound(tune[i]);
      }, i * 400); // 400ms between each note
    }
  }
});
