const letras = new Set();

letras.add("a");
letras.add("b");
letras.add("c");

console.log(letras);

const letrasGregas = new Set(["alfa", "beta", "gama"]);

letrasGregas.add("alfa");

console.log(letrasGregas);

console.log(letrasGregas.has("épsilon"));
console.log(letrasGregas.has("alfa"));

letrasGregas.forEach((valor) => console.log(valor));

for (const elemento of letrasGregas.values()){
    console.log(elemento);
}

for (const elemento of letrasGregas.keys()){
    console.log(elemento);
}



