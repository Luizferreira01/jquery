const form = document.getElementById('form');
const nometarefa = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addtarefa();
    atualizatabela();

})

function addtarefa() {
    const inputtarefa = document.getElementById('tarefa');

    if(nometarefa.includes(inputtarefa.value)){
        alert(`a tarefa ${inputtarefa.value}ja foi inserida!`);
    }else{
        nometarefa.push(inputtarefa.value);

        var linha = `<li> ${inputtarefa.value}</li>`;

        linhas += linha;
    }

    inputtarefa.value = '';
}

function atualizatabela(){
    const tabelaraiz = document.querySelector('ul');
    tabelaraiz.addEventListener('click', function (e){
        if(e.targetclasslist.contains('checked')){
            e.target.classlist.remove('checked');
        }else{
            e.target.classlist.add('checked');
        }
    });
}
