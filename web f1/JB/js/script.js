$(document).ready(main);
var cont =1;
function main(){


    $('.me').click(function(){

        if(cont == 1){
            
            $('nav').animate({
                left : 0
            })

            cont = 0;
        }else{
            cont = 1;

            cont =1;
                $('nav').animate({
                    left : '-100%'
                });
        };


    });
};