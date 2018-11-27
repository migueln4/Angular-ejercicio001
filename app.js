var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mensaje = "Hola";
var SALUDO = "Buenos días"; //Es obligatorio darle el valor a la constante nada más declararla.
if (true) {
    var mensaje_1 = "Adiós"; //Cuando la variable es var, al cambiarla dentro de los scopes, también varía fuera de ellos. Al hacerla let significa que tiene un scope local.
    var SALUDO_1 = "Buenas tardes";
    //Dentro de este scope, la constante SALUDO tiene el valor de "Buenas tardes", pero fuera de él continúa teniendo el de "Buenos días". Al estar declarada aquí, impide que se pueda utilizar la constante SALUDO antes de esta declaración dentro de este mismo scope.
}
console.log(mensaje);
var nombre; //La mejor forma de declarar una variable en Typescript es hacerlo especificando el tipo de dato que se le da.
nombre = "Miguel";
var numero = 1;
var booleano = true;
var hoy = new Date('2018-11-26'); //También sirve esta asignación a las variables complejas, como los objetos.
console.log(hoy);
//Hay un tipo de dato especial llamado any
var cualquiera;
//Esto quiere decir que esta variable puede recibir cualquier tipo de dato:
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
var spiderman = {
    nombre: "Peter Parker",
    edad: 20
}; //Typescript crea un tipo de dato específico para esta variable, que ahora es un objeto. No se le puede asignar ningún dato qeu no coincida con lo que ya se ha establecido aquí.
var luchador = "John";
var apellido = "Cena";
var n = 26;
var texto = "Hola, " + luchador + " " + apellido + " (" + n + " campeonatos)";
console.log(texto);
var texto2 = "Hola, " + luchador + " " + apellido + " (" + n + " campeonatos)"; //Esto sirve para hacer plantillas de texto, y hay que usar expresamente esto: `. Lo que hace es leer las diferentes variables y se introducen en el lugar adecuado. Ojo, que todo lo que se pone dentro de ${} es JavaScript puro. Aquí se pueden meter llamadas a funciones, cálculos matemáticos, etc.
console.log(texto2);
function getNombre() {
    var palabra = "Batista";
    console.log("Llamada a la función");
    return palabra;
}
var texto3 = "Hola, " + getNombre();
console.log(texto3);
/* ----------- PARÁMETROS OBLIGATORIOS Y OPCIONALES ------------------ */
function activar(quien) {
    var mensaje;
    mensaje = quien + " activ\u00F3 la Batse\u00F1al.";
    console.log(mensaje);
}
activar("Comisario Gordon");
function encender(quien, objeto) {
    if (objeto === void 0) { objeto = "Batseñal"; }
    var mensaje;
    mensaje = quien + " activ\u00F3 " + objeto + ".";
    console.log(mensaje);
}
encender("Comisario Gordon");
function pulsarOn(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "Batseñal"; }
    var mensaje;
    if (momento) { //Directamente, esto significa que mesta variable está definida y existe.
        mensaje = quien + " activ\u00F3 " + objeto + " en la " + momento + ".";
    }
    else {
        mensaje = quien + " activ\u00F3 " + objeto + ".";
    }
    console.log(mensaje);
}
pulsarOn("Comisario Gordon");
pulsarOn("Alfred", "reloj de cuco", "tarde"); //Si se quiere ahora darle valor a la variable que está por defecto, necesariamente, hay que ir en orden de los atributos que se han definido en la función.
//NOTA: nunca se puede poner el atributo inicial como opcional porque los obligatorios no pueden ir detrás de los opcionales.
/* ----------- FUNCIONES NORMALES Y DE FLECHA ------------------ */
var miFuncion = function (a) {
    return a;
};
var miFuncionFlecha = function (a) { return a; }; //Esta es la función normal que hace exactamente lo mismo que la función que está encima (los paréntesis, en este ejemplo, no son oblitarios).
console.log(miFuncion("Normal"));
console.log(miFuncionFlecha("Flecha"));
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncionFlecha2 = function (a, b) { return a + b; };
var miFuncion3 = function (palabra) {
    palabra = palabra.toUpperCase();
    return palabra;
};
var miFuncionFlecha3 = function (palabra) {
    palabra = palabra.toUpperCase();
    return palabra;
};
var hulk = {
    nombre: "Bruce",
    aplastar: function () {
        console.log("¡¡¡" + this.nombre.toUpperCase() + " APLASTA!!!");
    } //En el archivo .js se puede ver cómo se hacía antes: aplastar: function () {
};
hulk.aplastar();
var hulka = {
    nombre: "Jessica",
    aplastar: function () {
        setTimeout(function () {
            console.log("¡¡¡" + this.nombre.toUpperCase() + " APLASTA!!!");
        }, 1500); //PROBLEMA: cuando se utiliza un this dentro de un setTimeout, el this apunta al objeto global (la ventana). Como ya hay un nombre global, lo que hace es coger esa variable que ya existe (hay una en este documento: Miguel). Esto hay que arreglarlo usando una función de flecha.
    }
};
hulka.aplastar();
var hulkaFlecha = {
    nombre: "Jessica",
    aplastar: function () {
        var _this = this;
        setTimeout(function () { return console.log("¡¡¡" + _this.nombre.toUpperCase() + " APLASTA!!!"); }, 2000);
    } //Así queda arreglada la función. Cuando no hay ningún parámetro de entrada es obligatorio poner los paréntesis antes de la flecha. Una de las principales funciones de las funciones de flecha es que el this no se afecta a lo que está involucrado en la función, ya que sigue apuntando al objeto.
};
hulkaFlecha.aplastar();
/*--------------- DESTRUCTURACIÓN DE OBJETOS Y ARRAYS -------- */
var vengador = {
    nombreV: "Steve Rogers",
    pseudonimoV: "Capitán América",
    poderV: "superfuerza"
};
var nombreVengador = vengador.nombreV;
var pseudonimoVengador = vengador.pseudonimoV;
var poderVengador = vengador.poderV;
console.log(nombreVengador, pseudonimoVengador, poderVengador);
//Todo lo de antes se puede hacer directamente en una sola línea mediante da destructuración de objetos.
var nombreV = vengador.nombreV, pseudonimoV = vengador.pseudonimoV, poderV = vengador.poderV; //Hay que poner los nombres de las variables que tiene el mismo objeto. El orden da absolutamente igual. Lo más importante es que, dentro de esas llaves, cuando se utilizan los :, en vez de especificar el tipo de dato, se le da un alias. En una destructuración, Typescript le da el tipo de forma automática.
console.log(nombreV, pseudonimoV, poderV);
var vengadores = ["Thor", "Viuda Negra", "Iron Man"];
//Se puede hacer lo mismo para un array.
var thor = vengadores[0], natasha = vengadores[1], tony = vengadores[2]; //Se utilizan los corchetes y los nombres de las variables en su interior se las damos nosotros. Básicamente, aquí lo que hemos hecho es extraer en variables los datos de un array. Al contrario que los objetos, aquí se obtienen los datos de forma secuencial.
console.log(thor, natasha, tony);
var stark = vengadores[2]; //Si solo se quiere una posición en concreto, se deben ir 'saltando' posiciones especificándolo con las comas.
/* --------------- PROMESAS ------------------- */
//Algo importante a tener en cuenta es que las promesas son asíncronas.
var promesa1 = new Promise(function (resolve, reject) {
    //Aquí se ejecuta todo el código dentro del proceso asíncrono
    setTimeout(function () {
        console.log("Promesa terminada");
        resolve(); //Esto es solo si termina bien
        //reject(); <---esto se queda comentado, pero es lo que se ejecutará si hay algún problema.
    }, 1500);
});
console.log("Paso 1 de la promesa 1");
promesa1.then(function () {
    console.log("¡Ejecutarme cuando se termine bien!");
}, function () {
    console.error("¡Ejecutarme si algo sale mal!");
});
console.log("Paso 2 de la promesa 1"); //Al ser un proceso asíncrono, los pasos 1 y 2 se ejecutan antes que la promesa, ya que esta se le ha especificado que tenga un retardo.
function enviarMision(xmen) {
    console.log("Enviando a la misión a " + xmen.nombre);
}
function entrenar(xmen) {
    console.log("Entrenando a " + xmen.nombre);
}
var ciclope = {
    nombre: "Scott Summers",
    poder: "rayos oculares"
};
enviarMision(ciclope);
entrenar(ciclope);
/* ---------------------- PROGRAMACIÓN ORIENTADA A OBJETOS --------------------- */
var Defensor = /** @class */ (function () {
    function Defensor() {
    }
    return Defensor;
}());
//NOTA: si hay una propiedad de una clase que sea opcional, se utiliza la misma sintaxis que cuando se trata de un parámetro de una función: nombre?:string.
var antman = new Defensor(); //Así se crea el objeto.
console.log(antman); //Este será un objeto vacío.
//Para darle valores a un objeto de una clase hay que utilizar un constructor, que realmente también es una función.
var Defensor2 = /** @class */ (function () {
    function Defensor2(nombre, equipo, nombreReal) {
        this.nombre = "Ant-Man";
        this.puedePelear = false;
        console.log("Se ejecuta el constructor");
        this.nombre = nombre; //Esto funciona igual que Java.
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Defensor2;
}());
var antman2 = new Defensor2("Antman", "Team Cap", "Scott Lang");
console.log(antman2);
var Villano = /** @class */ (function () {
    //public nombre:string;
    function Villano(nombre) {
        this.nombre = nombre;
        //this.nombre = nombre;
    }
    Villano = __decorate([
        imprimirConsola //Esto se llama "decorador". Para las clases, un decorador lo que hace es enviar como parámetro el constructor a la fuerza. En este ejemplo, va a imprimir el constructor en la consola.
    ], Villano);
    return Villano;
}());
function imprimirConsola(constructor) {
    console.log(constructor);
}
//A noviembre de 2018, los decoradores son una característica experimental y por eso puede provocar un warning. Se puede quitar ese warning en el archivo tsconfig.json.
