
//AND = &&

function mayorYMenor (num) {
    if(num > 5 && num < 10) {
        console.log(true);
    } else{
        console.log(false);
    }
   
}

mayorYMenor (2);  //false
mayorYMenor (7);  //true

function mayorYMenorYPar (num) {
    if(num > 5 && num < 10 && num % 2 ===0) 
        console.log(true);
     else
        console.log(false);
    
   
}

mayorYMenorYPar (7);  //false
mayorYMenorYPar (8);  //true


//OR = ||

function operadorOr (str){
    if(str === 'Henry' || str.length<2)
    console.log (true);
    else console.log (false);
}

operadorOr ('Henry');  //true
operadorOr ('H');  //true
operadorOr ('Javascript');  //false

//NEGACION = !

function negacion (permiso) {
    if(permiso) 
    console.log ('Tiene permiso');       
}

negacion (true);

//En esta funcion estamos preguntando si el parametro permiso es 'if (permiso)' = 'true' en este caso de ser asi se va a imprimir en la terminal 'Tiene permiso'

//Si agregamos al 'if' un !, es decir 'if (!permiso)'. Estariamos preguntando lo contrario al anterior. Nos imprimira en la terminal 'Tiene permiso en el caso de que el valor sea 'false'

//En las anteriores estabamos preguntando si existia el valor del permiso 

//Poniendo 'if(permiso === true)' estamos diciendo si es equivalente a determinado valor
//En el otro caso 'if(permiso !== true)' no solo estamos diciendo si es equivalente si no si son diferentes 


function condicionCompleja (num) {
    if (num > 9 && num % 2 === 0 || num=== 3)
    console.log (true);
    else console.log (false);

}

condicionCompleja (10);
condicionCompleja (3);
condicionCompleja (6);
condicionCompleja (5);