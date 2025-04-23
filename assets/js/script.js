

//Variables en js
let edad3 = 30
let edad2 = 35
var nombre = "David"
let numeroGrande = 6151320654651619209819661896216849615612981
let nombre2 = "ñsjdfaisflsdnflsdnfdfaslkfns"
const rut = 16126511851135





//Tipos de datos
let texto ="este es un texto"
let numero = 2
let esEstudiante = false
let nulo = null
let indefinido;
let numeroGrande2 = 61916219846321984








//Operadores
var suma = 10 + 5

var resta = 10 -5

var multiplicacion = 10 * 5

var division = 10 / 5

var modulo = 10 % 5



//estructura de control
//if else

let nota = 10
if (nota >= 90) {
    console.log("muy buena nota")
} else if (nota >=50) {
    console.log("nota normal")
} else {
    console.log("reprobado")
}




//Bucles

for (let indice = 0; indice < 10; indice ++ ){
    console.log("indice=", indice)
    //alert("dando vueltas")
}


//manipulacion del DOM

const div_test = document.getElementById("div_test")
div_test.innerHTML = "<p>hola desde js</p>"

const div = document.getElementById("div")
const btn = document.getElementById("btn")

btn.addEventListener('click', () => {
    div.style.backgroundColor = 'red'

})

var numero1 = 5
var numero2 ="5"

//alert( numero1 == numero2)
//alert( numero1 === numero2)

var miNombre = promt("escribe tu nombre")
var edad = promt("dime tu edad")
var deporte = prompt("dime tu deporte favorito")

