"use strict";
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
