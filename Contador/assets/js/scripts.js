var currrentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
function increment() {
  currentNumber = currentNumber + 1;
  currrentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  currrentNumberWrapper = currentNumber;
}