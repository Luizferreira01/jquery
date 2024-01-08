const form = document.getElementById('form-lista');
const NomeTarefa = [];
let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    AddTarefa();
    atualizaTabela();
    
})

function AddTarefa() {
    const InputTarefa = document.getElementById('Tarefa');

    if(NomeTarefa.includes(InputTarefa.value)){
        alert(`a tarefa ${InputTarefa.value} já foi inserida!`);
    }else {
    
    NomeTarefa.push(InputTarefa.value);

  
    let linha = `<li> ${InputTarefa.value}</li>`;

    linhas += linha;
    }
    
    InputTarefa.value = '';
}

function atualizaTabela(){
    const Tabelaraiz = document.querySelector('ul');
    Tabelaraiz.innerHTML = linhas;
}