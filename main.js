$(document).ready(function() {
    $('header button').click(function(){
        alert("campo cadastrado")
    })

    $('form').on('submit', function(e){
        console.log("submit");
        e.preventDefault();
    })
})