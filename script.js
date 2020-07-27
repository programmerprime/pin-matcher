var generateButton = document.querySelector('.generate-btn');
var generatorBox = document.querySelector('#generator-box');
var inputBox = document.querySelector("#input-box");
var numbers = document.querySelectorAll(".number");
var backspace = document.querySelector(".backspace");
var allClear = document.querySelector(".all-clear");
var submitButton = document.querySelector(".submit-btn");

// generate pin number

generateButton.addEventListener('click', function() {
    document.getElementById("pin-matched").style.display = "none";
    document.getElementById("pin-not-matched").style.display = "none";
    inputBox.value = '';

    var x = Math.random();
    if(x<0.1){
        x = 0.1;
    }

    var randomNumber = x * 10000;
    generatorBox.value = randomNumber.toFixed(0);
});

// input numbers in the input section

numbers.forEach(item => {
    item.addEventListener('click', function(){
        var digit = item.innerText;
        inputBox.value += digit;

    })
});

// submit event

submitButton.addEventListener('click', function() {
    if(generatorBox.value == inputBox.value) {
        document.getElementById("pin-matched").style.display = "block";
        generatorBox.value = '';
        inputBox.value = '';
    } else {
        document.getElementById("pin-not-matched").style.display = "block";
        generatorBox.value = '';
        inputBox.value = '';
    }
})


allClear.addEventListener('click', function() {
    inputBox.value = '';
})


backspace.addEventListener('click', function() {
    inputBox.value = inputBox.value.slice(0, -1);
    // inputBox.value.length - 1
})

