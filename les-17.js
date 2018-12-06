var x, n, total;

function showElementById(id) {
    document.getElementById(id).classList.remove('hide');
}

function hideElementById(id) {
    document.getElementById(id).classList.add('hide');
}

function enterData() {
    x = parseFloat(prompt("Please enter X = ", 0));
    n = parseFloat(prompt('Please enter N = ', 0));
    total = x + n;

    document.getElementById('x-number').innerHTML = 'You entered  X = ' + x;
    document.getElementById('n-number').innerHTML = 'You entered  N ='  + n;

    var isInvalidData = Number.isNaN(x) || Number.isNaN(n);

    if (isInvalidData) {
        hideElementById('calculate');
    } else {
        showElementById('calculate');
    }

    hideElementById('result');
    showElementById('results-container');
}

function calculateSum() {
    document.getElementById('result').innerHTML = 'Result: ' + total.toFixed(2);
    hideElementById('calculate');
    showElementById('result');
}

document.getElementById('start').addEventListener('click', enterData);
document.getElementById('calculate').addEventListener('click', calculateSum);