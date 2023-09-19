

 function appendToResult(val) {
    var result = document.getElementById('res');
    result.value += val;
}

function calculateResult() {
    var input = document.getElementById('res');
    var expression = input.value;
    try {
        var result = eval(expression);
        input.value = result;
    } catch (error) {
        input.value = 'Error';
    }
}

function clearResult() {
    var input = document.getElementById('res');
    input.value = '';
}

function backspace() {
    var input = document.getElementById('res');
    input.value = input.value.slice(0, -1);
}
