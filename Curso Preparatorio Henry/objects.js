//var deportes = {
    //conBalon: ['Football', 'Basketball', 'Rugby'], 
    //sinBalon: ['Boxeo', 'Surf', 'Trekking'],};

//var persona = {nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}};

//console.log (persona.edad);
//persona.nombre = 'Martin';
//console.log (persona.nombre);
//persona.edad = 32;
//console.log (persona.edad);

//var autos= {}
//autos.marcas =['Ford', 'Audi', 'Ferrari'];
//delete autos.marcas;
//console.log(autos);

//var misFunciones = {
    //saludar: function() {
        //console.log ('Hola');
    //},
//}; 

//misFunciones.saludar ();

//var atuendos = {manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'],} ;
//atuendos['piernas'] = ['Bermudas', 'Pantalones'];
//.log (atuendos); 

//var comidas = {};
//var diferenciaDeNotaciones = function (propUno, propDos) {
    //comidas [propUno] = ['Frutas', 'Vegetales'];
    //comidas [propDos] = ['Hamburguesa', 'Papas Fritas'];
//};
//diferenciaDeNotaciones ('saludable', 'noSaludable');
//console.log (comidas);

//var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
//var tienePropiedad = libro.hasOwnProperty ('autor');
//console.log(tienePropiedad);

//var todasLasPropiedades = Object.keys (libro);
//console.log (todasLasPropiedades);

//var mundo = {continentes: 7, paises: 195, oceanos: 5};
//for (var prop in mundo){
    //console.log ('Esta es la propiedad: ' + prop);
    //console.log ('Este es el valor: ' + mundo [prop]);
//}

var mascota = {
    animal : 'Perro', 
    raza: 'Ovejero Aleman', 
    amistoso: true, 
    dueña: 'Maria Lopez', 
    info: function (){
        console.log ('Mi perro es un ' + this.raza);
    },
};

mascota.info ();