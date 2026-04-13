const carros = ["Fusca", "Corola", "Gol", "Palio", "Chevette", "Opala"];
console.log(carros);//exibe todos os valores
console.log(carros[2]);//exite o terceiro item do array
console.log(typeof carros);

for(i = 0; i < 6; i++){
    console.log(carros[i]);
}

carros.forEach((valor) => console.log( valor ));

const numeros = [45, 4, 9, 16, 25];
const acimaDe18 = numeros.filter(valor => valor > 18);
console.log(acimaDe18);

for(i = 0; i < 5; i++){
    if (numeros[i] > 18){
        console.log(numeros[i]);
    }    
}

console.log(numeros.reduce((total, valor) => total + valor));

console.log(numeros.map(valor => valor * 2));

