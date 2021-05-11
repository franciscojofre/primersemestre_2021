//1 y 2//
let misDatos = {
    nombre: "Francisco",
    apellido: "Jofre",
    edad: 18,
    comidaFavorita: "Lentejas",
    dni: 44317987,
    saludar: function(){
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }
}

console.log(misDatos.saludar());

//3//
let auto = {
    marca: "Audi",
    modelo: "A3",
    año: 2018,
    color: "Verde",
}