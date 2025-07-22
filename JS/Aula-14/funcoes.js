function cumprimentar(nome, sobrenome) {
    console.log("Oi! " + nome + " " + sobrenome);
}

cumprimentar("João", "Gomes");
cumprimentar("Ana", "Castela");
cumprimentar("José", "Neto");
cumprimentar("Maria", "Betânia");
cumprimentar("Cristiano", "Araújo");

console.log(typeof cumprimentar);

// Função sem parâmetros e sem retorno.
// Função com parâmetros e sem retorno.
// Função sem parâmetros e com retorno.
// Função com parâmetros e com retorno.

// Função com parâmetros e com retorno.
function calcularAreaRetangulo(base, altura) {
    let area = base * altura;
    return area;
}

let area = calcularAreaRetangulo(4, 5);
console.log(area);

// Função sem parâmetros e com retorno.
function buscarTodosProdutos() {
    // consultador no banco de dados
    let produtos = ['produto 1', 'produto 2'];
    return produtos;
}

let produtos = buscarTodosProdutos();
console.log(produtos);

// Funçao com valor padrão de parâmetro
function calcularPotencia(base = 0, expo = 1){
    let potencia = base ** expo;
    return potencia
}


let potencia = calcularPotencia(2, 10);
console.log(potencia);

//Funções Anonimas

const somar = function (n1,n2){
    let soma = n1+n2
    return soma;
}
console.log(somar(12, 8)); //20

//Funções de seta (Arrow Functions)

const subtrair = (n1, n2) => n1 - n2; // não precisa de chaves, mas se houver precisa do return
    
 let resultado = subtrair(15,9);
 
 console.log(resultado)//6

 const quadrado = n => n**2;
 
 console.log(quadrado(8));// 64

 // Função Callback
function saudar (Callback, nome){
    console.log("Preparando a saudação.");
    Callback(nome)
 }

 function ola(nome){
    console.log("Ola", nome);
 }
 saudar (ola, "Emily");

//  function delay(){
//     console.log("Acabou o tempo!")
//  }

//  setTimeout(delay, 3000);

// exemplo de callback com função de seta

setTimeout(() => {
    console.log("Acabou o tempo.")
}, 3000);

let interval= setInterval(() => {
    console.log("Passou 4 segundos.")
}, 4000);

clearInterval(interval); // como interromper intervalos

console.log("Final do código.")

//Função SIM/NÃO numero par

function verificarPar(numero) {
    if (numero % 2 == 0) {
        return "SIM"
    }
    return "NÃO"
}

console.log(verificarPar(11))




 
