const form = document.querySelector("#form");
const input = document.querySelector("#input");
const inputPrioridade = document.querySelector("#inputPrioridade");
const List = document.querySelector("#List");

form.addEventListener('submit', function (evento) {
  evento.preventDefault()

const texto = input.value
const prioridade = inputPrioridade.value
 
const tarefa = document.createElement('tr')

    let prioridadeClass = ''
    if (prioridade === 'Alta') {
      prioridadeClass = 'bg-danger';
    } else if (prioridade === 'Média') {
      prioridadeClass = 'bg-warning';
    } else if (prioridade === 'Baixa') {
      prioridadeClass = 'bg-info';
    }

    tarefa.innerHTML = 
    `<td>${texto}</td>
      <td> <span class="badge ${prioridadeClass}"> ${prioridade} </span> </td>
      <td> <button class="btn btn-success btn-sm"> Concluir </button> </td>
      `

    tarefa.querySelector('button').addEventListener('click', function () {
      tarefa.remove()
    });

    List.append(tarefa)

    input.value = ''
    inputPrioridade.value = ''
  
});
