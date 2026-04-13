const frutas = new Map();

frutas.set("maçã", 5);
frutas.set("banana", 7);
frutas.set("laranja", 10);

console.log("O preço do quilo da banana é: " + frutas.get("banana"));

const legumes = new Map([
    ["batata", 6],
    ["cenoura", 4],
    ["abobrinha", 8]
])
console.log(`O preço do quilo da abobrinha é: ${legumes.get("abobrinha")}`);

frutas.set("manga", 12);

console.log(frutas);

legumes.forEach((valor, chave) => console.log(`${chave} = ${valor}`));

for (const x of legumes.keys()){
    console.log(x);
}

for (const x of legumes.values()){
    console.log(x);
}
