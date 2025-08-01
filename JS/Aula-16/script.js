console.log(document); // objeto que representação o HTML

const imgs = document.getElementsByTagName("img"); // consultar pelo nome da tag
const cards = document.getElementsByClassName("card"); // consultar pelo nome da classe
const carrossel = document.getElementById("carrossel"); // consulta pelo id

console.log(imgs);
console.log(cards);
console.log(carrossel);

const linksFooter = document.querySelectorAll("footer .nav-link"); // retorna uma lista de objetos (consulta o seletor (aqueles de css)
const main = document.querySelector("main"); // retorna somente o primeiro seletor que encontra

console.log(linksFooter);
console.log(main);


const titulo = document.querySelector(".navbar-brand");
titulo.innerHTML += " <b> Plataforma Educacional </b>"
titulo.href = "https://soulcode.com";
titulo.style.color = "#336ee3"
titulo.setAttribute ("target", "_blank")


const patrocinadores = document.querySelector("#patrocinadores");
const lista = [ 
   "TechSolutions",
    "CodeMaster Academy",
    "InovaTech",
    "DigitalBoost",
    "CloudNinja",
    "WebDevPro",
    "StartUp Power",
    "DevTools Co.",
    "FullStack Partner",
    "NextGen Learning"
];
for (let item of lista) {
    const card = "<div class='card p-3'>"  + item + "</div>" ;
    patrocinadores.innerHTML += card;
}

const semaforos = [
    "./images/semaforo-1.png", // 0 vermelho
    "./images/semaforo-2.png", // 1 amarelo
    "./images/semaforo-3.png" // 2 verde
];

let indice = 0;
const semaforo = document.querySelector("#semaforo")

setInterval(() => {
    if (indice == 0){
        indice = 1;
        // mudar para amarelo
    } 
    else if (indice == 1) {
        // mudar pra verde
        indice = 2;
        
    }
    else{
        // mudar vermlho
        indice = 0;
    }
    semaforo.src = semaforos[indice]
}, 3000);