// Constructor Function
function Drum(key, soundPath) {
  this.key = key;
  this.sound = soundPath;
  this.play = function () {
    new Audio(this.sound).play();
  };
}

// Create drum objects
const drumKit = [
  new Drum("w", "sounds/tom-1.mp3"),
  new Drum("a", "sounds/crash.mp3"),
  new Drum("s", "sounds/tom-2.mp3"),
  new Drum("d", "sounds/kick-bass.mp3"),
  new Drum("j", "sounds/tom-3.mp3"),
  new Drum("k", "sounds/snare.mp3"),
  new Drum("l", "sounds/tom-4.mp3"),
];

// Play sound by key
function playSound(key) {
  const drum = drumKit.find((d) => d.key === key);
  if (drum) drum.play();
}

// Button click
let buttons = document.getElementsByClassName("drum");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    playSound(this.innerText);
    animateButton(this.innerText);
  });
}

// Key press
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  animateButton(event.key);

  // Play tune if "T" is pressed
  if (event.key.toLowerCase() === "t") {
    let tune = ["w", "a", "s", "d", "j", "k", "l"];
    tune.forEach((key, index) => {
      setTimeout(() => {
        playSound(key);
        animateButton(key);
      }, index * 400);
    });
  }
});

// Animation
function animateButton(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 150);
  }
}
