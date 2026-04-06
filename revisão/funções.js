let num3 = 2;

function somarNumeros(num1, num2){
    return num1 + num2 + num3;
}

console.log(somarNumeros(5, 10));

const calcularFrete = function (distancia, peso){
    return (distancia * 0.5) + (peso * 2);
}

console.log("O frete são R$" + calcularFrete(100, 5));

const calcularFrete2 = (distancia, peso) => { 
    return (distancia * 0.5) + (peso * 2);
}
console.log("O frete são R$" + calcularFrete2(250, 10));

const calcularFrete3 = distancia => distancia * 0.5;

console.log("O frete são R$" + calcularFrete3(100)); 

const calculadora = (num1 = 2, num2, operacao) => {
    return operacao(num1, num2);
}
const conta = (num1, num2) => num1 + num2;

console.log(calculadora(
    num1 = 2,
    num2 = 3,
    operacao = conta
));
