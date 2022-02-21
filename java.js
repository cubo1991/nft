

window.addEventListener('scroll', function(){
    let animacion1 = document.getElementById('animado1');
    let animacion2 = document.getElementById('animado2');
    let animacion3 = document.getElementById('animado3');
    let animacion4 = document.getElementById('animado4');
    let posicionObj1 = animacion1.getBoundingClientRect().top;
    let posicionObj2 = animacion2.getBoundingClientRect().top;
    let posicionObj3 = animacion3.getBoundingClientRect().top;
    let posicionObj4 = animacion4.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight
    
    if(posicionObj1 < tamañoDePantalla) {
        animacion1.style.animation = 'deslizar 1s ease-out'
        animacion2.style.animation = 'deslizar 1s ease-out'
        animacion3.style.animation = 'deslizar 1s ease-out'
        animacion4.style.animation = 'deslizar 1s ease-out'
        
        
    
    }
    /*if(posicionObj2 < tamañoDePantalla) {
        animacion2.style.animation = 'deslizar 1s ease-out'
    
    }
    if(posicionObj3 < tamañoDePantalla) {
        animacion3.style.animation = 'deslizar 1s ease-out'
    
    }
    if(posicionObj4 < tamañoDePantalla) {
        animacion4.style.animation = 'deslizar 1s ease-out'
    
    }*/
 })

$(document).ready(function(){

$("#imagen1").show();
$("#imagen2").css({opacity: 0}, 0);
$("#imagen3").css({opacity: 0}, 0);

$("#imagen1").mouseover(() => {
    $("#imagen1").animate({opacity: 0}, 800);
    $("#imagen2").animate({opacity: 1}, 500);
   
}

)
$("#imagen2").mouseover(() => {
    $("#imagen2").animate({opacity: 0}, 800);
    $("#imagen3").animate({opacity: 1}, 500);
   
})
$("#imagen3").mouseover(() => {
    $("#imagen3").animate({opacity: 0}, 800);
    $("#imagen1").animate({opacity: 1}, 500);
   
})

})
