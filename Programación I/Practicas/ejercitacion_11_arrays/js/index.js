//Primera consigna: Rompehielo//
let ciudad = "San Juan"
let estudioEnUdesa = true
let nombreFamiliares = ["Maria", "Antonio", "Ramiro", "Lucas"]

console.log(ciudad);
console.log(estudioEnUdesa);
console.log(nombreFamiliares[3]);

//Segunda consigna: Tipos de datos//
//1 y 2// 
let nombre = "Francisco"
let apellido = "Jofre"
let edad = 18

//3//
let nombreCompleto = `${nombre} ${apellido}`

//4//
let peliculasFavoritas = ["Hasta el ultimo hombre", "La teoria del todo", "Toy Story", "Capitan America", "HSM"]

//5//
let arrayDeArray = [["hola", "mundo"], ["hola", "todo", "el", "mundo"]]

//6//
let frutas = ["Banana", "Naranja", "Limon", "Manzana", "Mango"]
let citricos = [frutas[1], frutas[2], frutas[4]]

//7//
console.log(frutas.length);

//8//
frutas.push("Frutilla", "Melon")
console.log(frutas.length);

//9 Complementario//
let arbolGenealogico = [
    ["Rita", "Ernesto", "Jose Juan", "Elvira"],
    [],
    ["Silvina", "Alberto", "JJ", "Luka", "Vicente", "Manuel"],
    []
]

arbolGenealogico[1].push("Jaime", "Lorena")
arbolGenealogico[3].push("Susan", "Juana", "Pedro", "Candela", "Barbara", "Florencia", "Justina")

console.log(arbolGenealogico[0].length);
console.log(arbolGenealogico[1].length);
console.log(arbolGenealogico[2].length);
console.log(arbolGenealogico[3].length);

console.log(arbolGenealogico[0][0]);
console.log(arbolGenealogico[1][0]);
console.log(arbolGenealogico[2][0]);
console.log(arbolGenealogico[3][0]);