//como declarar variavel?
const n: number = 2;
const x: string = 'ola';
let y: string[] = [];
let isNumber: boolean = false;
let numeros: number[] = [1, 2, 3, 4, 5]

//verificar tipo
console.log(typeof isNumber);
console.log(typeof x);

//verificar tamanho do array
console.log(numeros.length);

//tuplas
let tupla: [number, string, string[]];
tupla = [1, "oi", ["ola", "Oi"]];
console.log(tupla);

//objetos literais -> {prop: value}
const usuario: {nome: string, idade: number} = {
  nome: "Lívia",
  idade: 20,
}
console.log(usuario);
console.log(usuario.idade);

//tipo any
let possoMudarDoJeitoErrado: any = 0;
possoMudarDoJeitoErrado = "ola"; // funciona

//solução pro any ---> UNION TYPES
let possoMudarDoJeitoCerto: string | number = 1;
possoMudarDoJeitoCerto = "ola";

//MELHOR FORMA DE MUDAR TIPOS!!!!!!!
//type alias
//você pode criar o seu próprio tipo
type myType = string | number;
let testandoTipo: myType = "ola";

//OUTRA BOA FORMA!!!
//enum
//exemplo: quando voce quer enumerar algo por tamanho (pequeno, medio, grande)
enum Size{
  P = "pequeno",
  M = "médio",
  G = "grande",
}

const copo: {cor: string, tamanho: Size} = {
  cor: "vermelho",
  tamanho: Size.G,
}
console.log(copo);

//literal types
let teste: "algumvalor" | null;
teste = "algumvalor";
//teste = "oi" // isso da erro!!!
teste = null;

//funçoes
function soma(a: number, b: number){
  return a + b;
}
console.log(soma(3, 4));

//tipar retorno da função
function digaOla(nome: string) : string{
  return `Olá ${nome}!`;
}
console.log(digaOla("Lívia"));

//retorno tipo void ---> sem retorno
function retorno() : void{
  console.log("OI");
}
retorno();

//parametro opcional
function fraseParamsOp(nome: string, idade?:string) : void{
  if(!idade){
    console.log("Olá Lívia, você não nos disse sua idade");
    return;
  }
    console.log(`Olá Lívia, você tem ${idade} anos`);
}
fraseParamsOp("Lívia");

//interfaces
interface mathProblems{
  n1: number,
  n2: number,
}

function somaAgain(nums: mathProblems) : number {
  return nums.n1 + nums.n2;
}

console.log(somaAgain({n1:1, n2:4}));

//generics
function showArrayItems<T>(items: T[]){
  items.forEach((item) =>{
    console.log(item);
  })
}

showArrayItems(["oi", "tudo", "bem"]);
showArrayItems([1, 2, 3, 4, 5]);

//classes
class Usuario{
  //atributos
  nome;
  idade;
  senha;
  //construtor
  constructor(nome: string, idade: number, senha: string){
    this.nome = nome;
    this.idade = idade;
    this.senha = senha;
  }
  //método qualquer
  retorneMinhaIdade(a: number) : number { return a};
}

const Livia = new Usuario("Lívia", 20, "livia2023");
console.log(Livia.retorneMinhaIdade(Livia.idade));

//interface em classes
interface Iveiculo{
  rodas: number,
  portas: number | null;
  showVeiculo() : void;
}

class Carro implements Iveiculo{
  rodas;
  portas;
  capacidade;
  
  constructor(rodas: number, portas: number | null, capacidade: number){
    this.rodas = rodas;
    this.portas = portas;
    this.capacidade = capacidade;
  }

  showVeiculo() : void{
    return;
  }
}
const meuCarro = new Carro(4, 2, 2);
console.log(meuCarro);

//herança
class SuperCarro extends Carro{
  engine;

  constructor(rodas: number, portas: number | null, capacidade: number, engine: number){
    super(rodas, portas, capacidade);
    this.engine = engine;
  }
}
const meuNovoCarro = new SuperCarro(4, 2, 2, 3);
console.log(meuNovoCarro);

//decorators
function baseParametros(){
  return function<T extends {new (...args: any[]): {}}>(constructor: T){
    return class extends constructor{
      id = Math.random();
      date = new Date();
    }
  }
}

@baseParametros()
class Pessoa{
  nome;
  idade;
  constructor(nome: string, idade:number){
    this.nome = nome;
    this.idade = idade;
  }
}

const livia = new Pessoa("livia", 20);
console.log(livia);