// Crie um programa que declare uma variável número e verifique se o valor é par ou ímpar usando if/else.
let numero = 5
if (numero % 2 == 0){
    console.log("par")
} else {
     console.log( "impar")
    }
 
// Crie uma variável mes que recebe um número de 1 a12. Use switch para imprimir o nome do mes da ano correspondente (1 = Janeiro, 2 = Fevereiro, etc).

let mes = 3;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto"); 
        break;
    case 9:
        console.log("Setembro"); 
        break;
    case 10:
        console.log("Outubro"); 
        break;
    case 11:
        console.log("Novembro"); 
        break;
    case 12:
        console.log("Dezembro"); 
        break; 
       
    default:
    console.log("Este mês não existe.");
} 
// Utilize um laço for para imprimir os números de 20 a 10 no console.

for (let a = 20; a >= 10; a--){
    console.log(a);
}

// Use um laço while para mostrar todos os números pares de 0 a 20.  

let i = 0
while (i <= 20) {
    console.log(i);
    i += 2; 
}





// Use for...in para exibir no console cada propriedade do objeto. 
let endereco = { cidade: "São Paulo", estado: "SP", cep: "12345-67" };
for (let prop in endereco) {
  // console.log(aluno[propriedade]);
    console.log(prop);
}
  
// Use for...of para percorrer o vetor e exibir cada fruta no console.
let frutas = ["Goiaba", "Morango", "Abacaxi", "Manga", "Abacate"];
for (let fruta of frutas){
    console.log(fruta)
}
// Usando for, exiba no console a tabuada do número 5 (de 5x1 até 5x10).
for (let i = 0;  i <= 10; i++) {
    console.log("5 x", i,"=", 5*i);
}



// Crie uma variável nota com valor de 0 a 10. Use if/else para exibir:
//"Reprovado" se nota < 5
// "Recuperação" se nota >= 5 e < 7
// "Aprovado" se nota >= 7

let nota = 7.5;
if (nota < 5) {
    console.log("Reprovado.");
} 
else if (nota >= 5 && nota <7){
    console.log("Recuperação.")
} else (nota >=7)
    console.log("Aprovado.");

// Crie um programa que calcule a soma dos números de 1 a 100 usando um laço while. Progressão Aritmética

let contador = 1;
let soma = 0;
while(contador <= 100){
    soma += contador;
    contador++;
}
console.log(soma);