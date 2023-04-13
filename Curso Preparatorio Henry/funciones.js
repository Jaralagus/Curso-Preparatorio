function sumaTres(x) {
    console.log(x + 3);
}

sumaTres(5);

// PRIMERO (FUNCION NORMAL CON RETURN)

function sumaTres(x) {
    return x+3;
}

// SEGUNDO (FUNCION GUARDAS LA FUNCION DENTRO DE UNA VARIABLE)

var sumaTres = function (x) {
    return x+3;
}

// TERCERO (FUUNCION DE FLECHA)

var sumaTres = (x) => {
    return x+3;
}