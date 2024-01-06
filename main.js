const form = document.getElementById('form');
const nometarefa = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

const inputnometarefa = document.getElementById('nome-tarefa');

let linha = '<li>';
linha += `<ul>${inputnometarefa.value}</ul>`;
linha += '</li>';

const corpotabela = document.querySelector('tbody');
corpotabela.insertAdjacentHTML('beforeend', linha);

inputnometarefa.value = '';
})