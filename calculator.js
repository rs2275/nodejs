var calculator = {};

calculator.add = function(a, b){
    console.log(a+b);
}

calculator.mul = function(a, b){
    console.log(a*b);
}

function sub(a, b){
    console.log(a-b);
}

module.exports = calculator;