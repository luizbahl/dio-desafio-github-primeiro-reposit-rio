var currentNumberWapper = document.getElementById ("currentNumber")
var currentNumber = 0;

function increment() {
	currentNumber = currentNumber + 1;
    currentNumberWapper.innerHTML = currentNumber;
}

function decrement() {
	currentNumber = currentNumber - 1;
    currentNumberWapper.innerHTML = currentNumber;
}