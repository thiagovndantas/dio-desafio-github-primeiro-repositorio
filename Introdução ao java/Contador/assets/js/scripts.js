var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;


function increment() {
    if (currentNumber >= 10) {
        return currentNumber
    } else{
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber
    }
    
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color="green"
    }
}


function decrement() {
    if (currentNumber <= -10) {
        return currentNumber
    } else {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber
    }

    if (currentNumber < 0) {
        currentNumberWrapper.style.color="red"
    }
}

var add = document.getElementById('add');
add.addEventListener('click',increment);
console.log(add)

var sub = document.getElementById('sub');
sub.addEventListener('click',decrement);
console.log(sub)
