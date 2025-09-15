/* ===============================
   GLOBAL VARIABLE
   =============================== */
let isPulsing = false; // tracks pulse state

/* ===============================
   togglePulse()
   Toggles the pulsing animation
   =============================== */
function togglePulse() {
  const circle = document.getElementById("circle");
  isPulsing = !isPulsing; 
  console.log("togglePulse() called → isPulsing =", isPulsing); // 🔍 debug log

  if (isPulsing) {
    circle.classList.add("pulsing");
    console.log("Circle is now pulsing");
  } else {
    circle.classList.remove("pulsing");
    console.log("Circle pulse stopped");
  }
}

/* ===============================
   changeColor(color)
   Changes circle color to given value
   =============================== */
function changeColor(color) {
  const circle = document.getElementById("circle");
  circle.style.backgroundColor = color;

  // log parameter usage
  console.log(`changeColor() called → parameter color = "${color}"`);
}

/* ===============================
   randomColor()
   Returns a random color from list
   =============================== */
function randomColor() {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
  const index = Math.floor(Math.random() * colors.length);
  const chosenColor = colors[index];

  // log return value
  console.log(`randomColor() picked "${chosenColor}" from index ${index}`);
  return chosenColor;
}

/* ===============================
   setRandomColor()
   Picks random color + applies it
   =============================== */
function setRandomColor() {
  let newColor = randomColor(); // local variable
  console.log(`setRandomColor() → newColor (local scope) = "${newColor}"`);

  changeColor(newColor); // reuse changeColor
}

/* ===============================
   applyCustomColor()
   Reads user input + applies it
   =============================== */
function applyCustomColor() {
  const userInput = document.getElementById("colorInput").value;
  console.log(`applyCustomColor() called → user input = "${userInput}"`);

  if (userInput) {
    changeColor(userInput);
  } else {
    console.warn("applyCustomColor() → No input entered!");
    alert("Please enter a color first!");
  }
}

/* ===============================
   AUTO CHANGE COLOR
   Circle changes every 5 seconds
   =============================== */
setInterval(() => {
  console.log("⏱ Auto color change triggered");
  setRandomColor();
}, 5000);
