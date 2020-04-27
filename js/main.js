$(document).ready(function () {
    var box = $('.box');

box.click(function(){

    var thisBox = $(this);

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(data) {
            var number = data.response;
            //thisBox.text(number)
            if (thisBox.text() === '0') {
                thisBox.text(number) 
                if (number <= 5) {
                    thisBox.addClass('yellow')
    
                } else {
                    thisBox.addClass('green')
                };
            } else {
                alert('Già Cliccato!')
            };

            
           
            
        },
        error: function(){
            alert('Error!!!!!');
        }
    });

    
    
});
    
    
    
}); //<- - - - End ready


// https://flynn.boolean.careers/exercises/api/random/int (ritorna un numero da 1 a 9)



/*

Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato
DevTools console e network sono nostri amici 
*/