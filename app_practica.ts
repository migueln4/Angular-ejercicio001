// Uso de Let y Const
let nombre:string = "Dick Grayson";
let edad:number = 23;

const PERSONAJE:{nombre:string,edad:number} = {
  nombre:nombre,
  edad:edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
let batman:Heroe = {
  nombreReal: "Bruce Wayne",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

interface Heroe {
  nombreReal:string,
  artesMarciales:string[]
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}

let resultadoDobleFlecha = (a:number,b:number) => 2*(a+b);

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

function getAvengerSolucion(nombre:string,poder?:string,arma:string="arco") {
  let mensaje;
  if(poder) {
    mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
  console.log(mensaje);
};
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
  base:number;
  altura:number;
  constructor(base:number,altura:number) {
    this.base = base;
    this.altura = altura;
  }
  calcularArea = () => this.base*this.altura;
}
