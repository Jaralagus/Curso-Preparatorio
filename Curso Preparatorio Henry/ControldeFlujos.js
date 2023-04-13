function viajar (destino) {
    if (destino === 'Brasil') {
        console.log ('Gire a la izquierda');
    } else if (destino === 'Argentina') {
        console.log('Gire a la derecha');
    } 
    }

    viajar ('Brasil');

    function PRUEBA (Perderse) {
        if (Perderse === 'Mapa') {
            console.log ('Sos un distraido');
        } else if (Perderse === 'GPS') {
            console.log ('Es muy facil');
        }
    }

    PRUEBA ('Mapa');

    function puedeManejar (edad) {
        if(edad >= 18) {
            console.log ('True');
        } else {
            console.log('False');
        }
    }

    puedeManejar(15);