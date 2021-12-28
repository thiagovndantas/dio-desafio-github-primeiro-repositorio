var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
}


function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
}


var add = document.getElementById('add');
add.addEventListener('click',increment);
console.log(add)

var sub = document.getElementById('sub');
sub.addEventListener('click',decrement);
console.log(sub)