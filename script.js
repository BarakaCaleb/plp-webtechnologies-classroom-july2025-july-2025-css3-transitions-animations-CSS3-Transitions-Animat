// -----------------------------
// Part 2: Functions, Scope & Return Values
// -----------------------------

// Function with parameters + return
function multiply(a, b) {
  return a * b;
}

// Demonstrating scope
let globalVar = "I am global";

function checkScope() {
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible only inside function
}
checkScope();

// -----------------------------
// Part 3: Combining CSS + JS
// -----------------------------

// Animate Box Button
const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

animateBtn.addEventListener("click", () => {
  jsBox.classList.toggle("active");
  console.log("Box size * 2:", multiply(2, 2)); // Example of function reuse
});

// Flip Card Button
const flipBtn = document.getElementById("flipBtn");
const card = document.getElementById("card");

flipBtn.addEventListener("click", () => {
  card.classList.toggle("flipped");
});
