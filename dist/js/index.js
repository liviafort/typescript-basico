"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//como declarar variavel?
const n = 2;
const x = 'ola';
let y = [];
let isNumber = false;
let numeros = [1, 2, 3, 4, 5];
//verificar tipo
console.log(typeof isNumber);
console.log(typeof x);
//verificar tamanho do array
console.log(numeros.length);
//tuplas
let tupla;
tupla = [1, "oi", ["ola", "Oi"]];
console.log(tupla);
//objetos literais -> {prop: value}
const usuario = {
    nome: "Lívia",
    idade: 20,
};
console.log(usuario);
console.log(usuario.idade);
//tipo any
let possoMudarDoJeitoErrado = 0;
possoMudarDoJeitoErrado = "ola"; // funciona
//solução pro any ---> UNION TYPES
let possoMudarDoJeitoCerto = 1;
possoMudarDoJeitoCerto = "ola";
let testandoTipo = "ola";
//OUTRA BOA FORMA!!!
//enum
//exemplo: quando voce quer enumerar algo por tamanho (pequeno, medio, grande)
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "m\u00E9dio";
    Size["G"] = "grande";
})(Size || (Size = {}));
const copo = {
    cor: "vermelho",
    tamanho: Size.G,
};
console.log(copo);
//literal types
let teste;
teste = "algumvalor";
//teste = "oi" // isso da erro!!!
teste = null;
//funçoes
function soma(a, b) {
    return a + b;
}
console.log(soma(3, 4));
//tipar retorno da função
function digaOla(nome) {
    return `Olá ${nome}!`;
}
console.log(digaOla("Lívia"));
//retorno tipo void ---> sem retorno
function retorno() {
    console.log("OI");
}
retorno();
//parametro opcional
function fraseParamsOp(nome, idade) {
    if (!idade) {
        console.log("Olá Lívia, você não nos disse sua idade");
        return;
    }
    console.log(`Olá Lívia, você tem ${idade} anos`);
}
fraseParamsOp("Lívia");
function somaAgain(nums) {
    return nums.n1 + nums.n2;
}
console.log(somaAgain({ n1: 1, n2: 4 }));
//generics
function showArrayItems(items) {
    items.forEach((item) => {
        console.log(item);
    });
}
showArrayItems(["oi", "tudo", "bem"]);
showArrayItems([1, 2, 3, 4, 5]);
//classes
class Usuario {
    //construtor
    constructor(nome, idade, senha) {
        this.nome = nome;
        this.idade = idade;
        this.senha = senha;
    }
    //método qualquer
    retorneMinhaIdade(a) { return a; }
    ;
}
const Livia = new Usuario("Lívia", 20, "livia2023");
console.log(Livia.retorneMinhaIdade(Livia.idade));
class Carro {
    constructor(rodas, portas, capacidade) {
        this.rodas = rodas;
        this.portas = portas;
        this.capacidade = capacidade;
    }
    showVeiculo() {
        return;
    }
}
const meuCarro = new Carro(4, 2, 2);
console.log(meuCarro);
//herança
class SuperCarro extends Carro {
    constructor(rodas, portas, capacidade, engine) {
        super(rodas, portas, capacidade);
        this.engine = engine;
    }
}
const meuNovoCarro = new SuperCarro(4, 2, 2, 3);
console.log(meuNovoCarro);
//decorators
function baseParametros() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.date = new Date();
            }
        };
    };
}
let Pessoa = class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
};
Pessoa = __decorate([
    baseParametros()
], Pessoa);
const livia = new Pessoa("livia", 20);
console.log(livia);
