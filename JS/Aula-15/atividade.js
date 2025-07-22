// Crie uma função chamada saudacao que recebe um nome como parâmetro e imprime no console:
// "Olá, [nome]!"

function saudacao (nome){
    console.log("Olá " + nome + "!")
}
saudacao ("Emily ")


// Crie uma função soma que recebe dois números como parâmetros e retorna o resultado da soma.

function soma(n1, n2){
    let resultado = n1 + n2;
    return resultado
}

let resultado = soma(5, 6);
console.log(resultado);

// Crie uma função ehPar que recebe um número e retorna true se for par, ou false caso contrário.

function ehPar(n){
   return (n % 2 == 0);   
    // if (n % 2 ==0){
    //     return true
    // }
    // return false

}
console.log(ehPar(26) ? "PAR" : "IMPAR");


// Crie uma função que receba um número e retorne o seu fatorial (ex: 5! = 120).

function fatorial(n){
    let resultado = 1; // guarda o valor do fatorial conforme a gente multiplica

    for (let i = 1; i <= n; i++) { // let i é só uma variavel temporária que vai passar os numeros até chegar a n
        resultado *= i; //resultado = resultado * i
    }
    return resultado
}

console.log(fatorial(6))



function fatorial (fat){
    let resultado = 1; // multiplicaçaõ 1 é o numero neutro, na soma começa com 0
    for (let i = fat; i >= 1; i--){
        resultado *= i
    }
    return resultado;
}
console.log(fatorial(19))


// Crie uma função que receba dois números e retorne o maior deles.

function maiorNumero (a, b){
    if ( a > b ){
        return a
    } else {
        return b
    }
}
 
console.log(maiorNumero(3,7))

// Crie uma função que recebe um vetor de números e retorna a média aritmética dos valores.

function mediaAritmética(a, b, c,){
    
 return (a + b + c) /3
}
console.log(mediaAritmética(2, 6, 4))


function media(valores){
    let soma = 0;

    for (let i = 0; i < valores.length; i++){
        soma =+ valores[i];
    } return soma / valores.length;
}
console.log(media( [6, 7, 8, 9, 5]))


function media(nums){
    let soma = 0;
    for (let n of nums){
        soma += n;
    }
    const resultado = soma / nums.length;
    return resultado;
}
const nums = [ 4, 7, 9 , 12, 17 , 3, 8];
console.log(media (nums))

// Crie uma função que recebe uma string e retorna ela invertida (ex: "JavaScript" → "tpircSavaJ").

// function inverter(string) {
//     return string.split('').reverse().join('');
// }
// console.log(inverter("JavaScript")); 


function inverter(string) {
    let invertida = "";

    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
    }

    return invertida;
}

console.log(inverter("JavaScript"))

function inverter(texto) {
    let invertida = "";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        invertida = letra + invertida;
    }
    return invertida;
}

console.log(inverter("Socorram-me subi no ônibus em marrocos"));

// Crie um array com 5 nomes. Mostre o primeiro e o último nome no console.
let nomes = [
    "Emily Neves",
    "Eduardo Peixoto",
    "Marineti Bispo",
    "Debora Neves",
    "Marcia Ramos"
];

console.log( nomes [0]);
console.log(nomes [4]);

// Crie um array de frutas. Adicione duas novas fruta.

let frutas = [
    "Romã",
    "Pitaya",
    "Graviola",
    "Fruta-do-Conde"
]
 console.log(frutas)
frutas.push("Goiaba", "Melão")
 console.log(frutas)


// Crie um vetor com nomes e use o método sort() para ordená-los em ordem crescente.

let animais = [ "Zebra", "Cobra", "Anta", "Macaco", "Jacaré", "Papagaio"]
console.log(animais)
console.log(animais.sort())

// Dado um array de números, verifique se o número 10 está presente.

let numeros = [1,4,52,566,342,6858,21,68,934,2,10];

console.log(numeros)

console.log (numeros.sort((a, b) => a - b));


const presente = numeros.includes(10)
console.log(presente ? "SIM" : "NÃO")


// Crie um array de números e use um laço for para calcular e exibir a soma total dos valores.

const numbs = [ 7, 8, 9, 4, 2]

function total(){

    let math = 0;
    
    for (let n = 0; n < numbs.length; n++) {
        math += numbs[n]
    }
    return math
}

console.log(total())


// Dado um array de números, crie um novo array com apenas os números pares.

const pares = numbs.filter(ehPar);

// const pares = numbs.filter(function(numbs){return numbs % 2 == 0});
console.log("Numeros pares:", pares)


// Crie um objeto pessoa com as propriedades nome, idade e cidade. Exiba cada uma das propriedades no console.

const pessoa = {
    nome : "Emily Neves",
    idade : "22",
    cidade : "Petrópolis"
}
console.log(pessoa.nome, pessoa.idade,pessoa.cidade)


// A partir do objeto pessoa, adicione dinamicamente a propriedade profissao.

pessoa.profissao = "Estudante"
console.log(pessoa.profissao)

// Crie um array com 3 objetos representando alunos. Cada objeto deve conter nome, nota1 e nota2.

const alunos = [
    {
        nome: "Robson Cunha",
        nota1: 10,
        nota2: 8
    },
    {
        nome: "Maria Silva",
        nota1: 9,
        nota2: 7
    },
    {
        nome: "João Souza",
        nota1: 8,
        nota2: 6
    }
];

// Percorra o array da questão anterior com um laço e calcule a média das notas de cada aluno. Exiba o nome e a média.

for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    let media = (aluno.nota1 + aluno.nota2) / 2;

    console.log("O Aluno",aluno.nome, "teve a média", media)
}

// Crie uma função que recebe um objeto carro com as propriedades marca e modelo, e retorna a frase: "Carro: [marca] [modelo]"



// Crie um array com as idades de 6 pessoas.
// Depois, use um for para calcular a média aritmética dessas idades.
// No final, mostre no console a mensagem:

// "A média das idades é: X"


const idades = [ 18, 19, 16, 23, 27, 22]

function mediaIdades() {
    let somaidades = 0;

    for (let i = 0; i < idades.length; i++){
         somaidades += idades[i]
    }
       
    return somaidades / idades.length;
} 

console.log("A média das idades é de:" + mediaIdades());