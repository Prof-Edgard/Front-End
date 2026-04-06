let texto = "Alô, mundo!"
console.log(texto.length);
console.log(texto[0]);
console.log(texto[10]);

let nome = "juliana";
console.log(nome.split(' ').map(palavra => palavra.charAt(0).toUpperCase() +
 palavra.slice(1).toLowerCase()));

let frase = "Aprender JavaScript é divertido!";
console.log(frase.includes("JavaScript"));

console.log("HTML é fácil".replaceAll("HTML", "JavaScript"));

let textoSujo = "      Olá,    mundo   !   ";
console.log(textoSujo.trim());