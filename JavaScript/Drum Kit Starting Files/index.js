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
      return;
  }
  buttonAnimation(key);
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  if (!activeButton) return;

  activeButton.classList.add("pressed", "bounce");

  setTimeout(() => {
    activeButton.classList.remove("pressed", "bounce");
  }, 300);
}

// Click event listeners on buttons
const buttons = document.getElementsByClassName("drum");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const buttonInnerText = this.innerText.toLowerCase();
    playSound(buttonInnerText);
  });
}

// Keyboard event listener
document.addEventListener("keydown", function (event) {
  const keyPressed = event.key.toLowerCase();
  if (keyPressed === "t") {
    // Play a short tune on pressing 't'
    const tune = ["w", "a", "s", "d", "j", "k", "l"];
    for (let i = 0; i < tune.length; i++) {
      setTimeout(() => playSound(tune[i]), i * 400);
    }
  } else {
    playSound(keyPressed);
  }
});
