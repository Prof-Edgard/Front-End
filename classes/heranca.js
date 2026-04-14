import { Carro } from "./encapsulamento.js"

class Modelo extends Carro {
    constructor(nome, ano, modelo){
        super(nome, ano);
        this.modelo = modelo;
    }
    exibir(){
        return "Este " + this.nome + " é do modelo " + this.modelo + 
            " e tem " + this.idade() + " anos de idade." 
    }
}

const carroArthur = new Modelo("Spin", 2018, "Standard");
console.log( carroArthur.exibir());