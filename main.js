const form = document.getElementById('form');
const nometarefa = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addtarefa();
    atualizatabela();

})

function addtarefa() {
    const inputnometarefa = document.getElementById('nometarefa');

    if(nometarefa.includes(inputnometarefa.value)){
        alert(`a tarefa ${inputnometarefa.value} ja foi inserida!`);
    }else{
        nometarefa.push(inputnometarefa.value);

        var linha = `<li> ${inputnometarefa.value}</li>`;

        linhas += linha;
    }

    inputnometarefa.value = '';
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
