export class Carro {
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
    idade(){
        const data = new Date();
        return data.getFullYear() - this.ano;
    }
}

const meuCarro = new Carro("Opala", 1972);
const carroDaMariaE = new Carro("Corolla", 2019);
console.log("O carro da Maria Eduarda é um " +
    carroDaMariaE.nome + " e tem " + 
    carroDaMariaE.idade() + " anos de idade."
)

console.log(meuCarro.nome);
console.log("A idade do meu carro é " + meuCarro.idade() + " anos.");