const form = document.querySelector("#form");
const v1 = document.querySelector("#valor1");
const v2 = document.querySelector("#valor2");
const painel = document.querySelector("#resultados");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const numero1 = parseFloat(v1.value);
  const numero2 = parseFloat(v2.value);

  const resultado = numero1 + numero2;

  painel.innerHTML = `
    <div class="alert alert-success">
      Resultado da soma: <strong>${resultado}</strong>
    </div>
  `;
});