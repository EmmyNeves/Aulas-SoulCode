const imagemPrincipal = document.querySelector("#imagem-principal")
const imagens = document.querySelectorAll(".imagens") //. é classe, # é id
// const imagem1 = document.querySelector("#imagem-1") 
// const imagem2 = document.querySelector("#imagem-2")
// const imagem3 = document.querySelector("#imagem-3")

for (let imagem of imagens) {
    imagem.addEventListener("click", () => {
        const imagemAtual = imagemPrincipal.src;
        imagemPrincipal.src = imagem.src;
        imagem.src = imagemAtual;
    });
}


// imagens.onclick = () => {
//     const imagemAtual = imagemPrincipal.src
//     imagemPrincipal.src = imagem1.src
//     imagem1.src = imagemAtual

// imagem2.onclick = () => {
//     const imagemAtual = imagemPrincipal.src
//     imagemPrincipal.src = imagem2.src
//     imagem2.src = imagemAtual

// ;}
// imagem3.onclick = () => {
//     const imagemAtual = imagemPrincipal.src
//     imagemPrincipal.src = imagem3.src
//     imagem3.src = imagemAtual

// ;}

// onclick é para clicar em uma imagem e ela muda a imagem
// onmouseenter é quando se passa o mouse encima da imagem e ela muda
// ondblclick com dois cliques na imagem voce troca a imagem