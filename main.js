$(document).ready(function(){
    $('header button').click(function(){
        alert("tarefa registrada")
    })
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        const novatarefa = $ ('<li></li>');
        $(`<div class="tarefas">
            <a href="${tarefa}" target="_blank" title="novatarefa">
                novas tarefas
            </a>
        </div>
        `).appendTo(novatarefa);
        $(novatarefa).appendTo('ul');
        $(novatarefa).fadein(5000);
        $('tarefa').val('')


    })

})