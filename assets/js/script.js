
$("p").click(function(){
    $(this).hide(4000)
    $(this).fadeIn(4000)
});

$("#boton").click(function(){
    $("#div").css({
        'background-color': '#f0ad4e',
        'color': '#ffff'
    })
})

$("#boton").click(function(){
    $("#div").slideToggle(1000)
})