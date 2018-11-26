let mensaje = "Hola";

const SALUDO = "Buenos días";

if (true) {
    let mensaje = "Adiós"; //Cuando la variable es var, al cambiarla dentro de los scopes, también varía fuera de ellos. Al hacerla let significa que tiene un scope local.
    const SALUDO = "Buenas tardes";
    //Dentro de este scope, la constante SALUDO tiene el valor de "Buenas tardes", pero fuera de él continúa teniendo el de "Buenos días". Al estar declarada aquí, impide que se pueda utilizar la constante SALUDO antes de esta declaración dentro de este mismo scope.
}

console.log(mensaje);

let nombre: string; //La mejor forma de declarar una variable en Typescript es hacerlo especificando el tipo de dato que se le da.

nombre = "Miguel";

let numero: number = 1;
let booleano: boolean = true;
let hoy: Date = new Date('2018-11-26');//También sirve esta asignación a las variables complejas, como los objetos.

console.log(hoy);

//Hay un tipo de dato especial llamado any
let cualquiera: any;
//Esto quiere decir que esta variable puede recibir cualquier tipo de dato:
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

let spiderman = {
    nombre: "Peter Parker",
    edad: 20
} //Typescript crea un tipo de dato específico para esta variable, que ahora es un objeto. No se le puede asignar ningún dato qeu no coincida con lo que ya se ha establecido aquí.


let luchador: string = "John";
let apellido: string = "Cena";
let n: number = 26;

let texto = "Hola, " + luchador + " " + apellido + " (" + n + " campeonatos)";

console.log(texto);

let texto2 = `Hola, ${luchador} ${apellido} (${n} campeonatos)`;//Esto sirve para hacer plantillas de texto, y hay que usar expresamente esto: `. Lo que hace es leer las diferentes variables y se introducen en el lugar adecuado. Ojo, que todo lo que se pone dentro de ${} es JavaScript puro. Aquí se pueden meter llamadas a funciones, cálculos matemáticos, etc.

console.log(texto2);

function getNombre() {
    let palabra: string = "Batista";
    console.log("Llamada a la función");
    return palabra;
}

let texto3 = `Hola, ${getNombre()}`;
console.log(texto3);

/* ----------- PARÁMETROS OBLIGATORIOS Y OPCIONALES ------------------ */

function activar(quien: string) { //Ya se está definiendo que esta función debe recibir una variable del tipo string
    let mensaje: string;
    mensaje = `${quien} activó la Batseñal.`;
    console.log(mensaje);
}

activar("Comisario Gordon");

function encender(quien: string, objeto: string = "Batseñal") { //Aquí, se le da un valor por defecto a la variable objeto. Esto quiere decir que, si no le llega ningún valor apra ese parámetro, ya se le ha dado uno por defecto.
    let mensaje: string;
    mensaje = `${quien} activó ${objeto}.`;
    console.log(mensaje);
}

encender("Comisario Gordon");

function pulsarOn(quien: string, objeto: string = "Batseñal", momento?: string) { //En este caso, además de una variable con un valor por defecto, hay una variable que es opcional. Se marca con esa interrogación y se le puede especificar, además, de qué tipo es. Dentro de la función, hay que contemplar que pueda llegar, o no, esa variable que se llama, en este caso, momento.
    let mensaje: string;
    if (momento) { //Directamente, esto significa que mesta variable está definida y existe.
        mensaje = `${quien} activó ${objeto} en la ${momento}.`;
    } else {
        mensaje = `${quien} activó ${objeto}.`;
    }
    console.log(mensaje);
}

pulsarOn("Comisario Gordon");
pulsarOn("Alfred", "reloj de cuco", "tarde");//Si se quiere ahora darle valor a la variable que está por defecto, necesariamente, hay que ir en orden de los atributos que se han definido en la función.
//NOTA: nunca se puede poner el atributo inicial como opcional porque los obligatorios no pueden ir detrás de los opcionales.

/* ----------- FUNCIONES NORMALES Y DE FLECHA ------------------ */

let miFuncion = function (a) {//Esta es una función normal
    return a;
}

let miFuncionFlecha = (a) => a; //Esta es la función normal que hace exactamente lo mismo que la función que está encima (los paréntesis, en este ejemplo, no son oblitarios).

console.log(miFuncion("Normal"));
console.log(miFuncionFlecha("Flecha"));

let miFuncion2 = function (a: number, b: number) {
    return a + b;
}

let miFuncionFlecha2 = (a: number, b: number) => a + b;

let miFuncion3 = function (palabra: string) { //Una función normal con varias líneas
    palabra = palabra.toUpperCase();
    return palabra;
}

let miFuncionFlecha3 = (palabra: string) => { //Así es como se hace una función de flecha con más de una línea en el cuerpo.
    palabra = palabra.toUpperCase();
    return palabra;
}

let hulk = {
    nombre: "Bruce",
    aplastar() {//En ES6, así es como se define una función en un objeto.
        console.log("¡¡¡" + this.nombre.toUpperCase() + " APLASTA!!!");
    }//En el archivo .js se puede ver cómo se hacía antes: aplastar: function () {
}

hulk.aplastar();

let hulka = {
    nombre: "Jessica",
    aplastar() { //Lo que hace esta función es lo mismo que la de Hulk, pero con 1,5 segundos de retardo. Para meter un retardo: setTimeout(function() {},segundos);
        setTimeout(function () {
            console.log("¡¡¡" + this.nombre.toUpperCase() + " APLASTA!!!");
        }, 1500);//PROBLEMA: cuando se utiliza un this dentro de un setTimeout, el this apunta al objeto global (la ventana). Como ya hay un nombre global, lo que hace es coger esa variable que ya existe (hay una en este documento: Miguel). Esto hay que arreglarlo usando una función de flecha.
    }
}

hulka.aplastar();

let hulkaFlecha = {
    nombre: "Jessica",
    aplastar() {
        setTimeout(() => console.log("¡¡¡" + this.nombre.toUpperCase() + " APLASTA!!!"), 2000);
    }//Así queda arreglada la función. Cuando no hay ningún parámetro de entrada es obligatorio poner los paréntesis antes de la flecha. Una de las principales funciones de las funciones de flecha es que el this no se afecta a lo que está involucrado en la función, ya que sigue apuntando al objeto.
}

hulkaFlecha.aplastar();

/*--------------- DESTRUCTURACIÓN DE OBJETOS Y ARRAYS -------- */

let vengador = { //Dado un objeto
    nombreV: "Steve Rogers",
    pseudonimoV: "Capitán América",
    poderV: "superfuerza"
}

let nombreVengador = vengador.nombreV;
let pseudonimoVengador = vengador.pseudonimoV;
let poderVengador = vengador.poderV;

console.log(nombreVengador, pseudonimoVengador, poderVengador);

//Todo lo de antes se puede hacer directamente en una sola línea mediante da destructuración de objetos.

let { nombreV, pseudonimoV, poderV } = vengador; //Hay que poner los nombres de las variables que tiene el mismo objeto. El orden da absolutamente igual. Lo más importante es que, dentro de esas llaves, cuando se utilizan los :, en vez de especificar el tipo de dato, se le da un alias. En una destructuración, Typescript le da el tipo de forma automática.

console.log(nombreV, pseudonimoV, poderV);

let vengadores: string[] = ["Thor", "Viuda Negra", "Iron Man"];

//Se puede hacer lo mismo para un array.

let [thor, natasha, tony] = vengadores; //Se utilizan los corchetes y los nombres de las variables en su interior se las damos nosotros. Básicamente, aquí lo que hemos hecho es extraer en variables los datos de un array. Al contrario que los objetos, aquí se obtienen los datos de forma secuencial.

console.log(thor, natasha, tony);

let [, , stark] = vengadores;//Si solo se quiere una posición en concreto, se deben ir 'saltando' posiciones especificándolo con las comas.

/* --------------- PROMESAS ------------------- */

//Algo importante a tener en cuenta es que las promesas son asíncronas.

let promesa1 = new Promise(function (resolve, reject) { //Es un convenio el usar resolve y reject como parámetros de las promesas. Resolve es lo que se hace cuando la función se ha resuelto correctamente y reject cuando da un error.

    //Aquí se ejecuta todo el código dentro del proceso asíncrono

    setTimeout(() => {
        console.log("Promesa terminada");
        resolve(); //Esto es solo si termina bien
        //reject(); <---esto se queda comentado, pero es lo que se ejecutará si hay algún problema.
    }, 1500)
})

console.log("Paso 1 de la promesa 1");

promesa1.then(function () { //Así es como se llama a una promesa. Lo que hay en la primera llamada es lo que se ejecuta al hacer la llamada de resolve().
    console.log("¡Ejecutarme cuando se termine bien!");
},
    function () { //Esto es lo que se ejecuta cuando hay una llamada a reject().
        console.error("¡Ejecutarme si algo sale mal!");
    }
)

console.log("Paso 2 de la promesa 1"); //Al ser un proceso asíncrono, los pasos 1 y 2 se ejecutan antes que la promesa, ya que esta se le ha especificado que tenga un retardo.

/* ---------------------- INTERFACES --------------------- */

//function enviarMision(xmen:{nombre:string}) { <--- Si se coloca así, se especifica que lo que se recibe realmente es un objeto. Además, que dentro de él tiene una propiedad del tipo string que se llama nombre.

interface XMen { //Es un estándar que las interfaces empiecen con mayúscula y tengan la estructura camelcase.
    nombre:string,
    poder:string
}

function enviarMision(xmen:XMen) {
    console.log("Enviando a la misión a "+xmen.nombre);
}

function entrenar(xmen:XMen) {
    console.log("Entrenando a "+xmen.nombre);
}

let ciclope:XMen = { //Este objeto coincide con la interfaz que se ha definido. Por eso se le puede poner el tipo de dato así.
    nombre: "Scott Summers",
    poder: "rayos oculares"
};

enviarMision(ciclope);
entrenar(ciclope);