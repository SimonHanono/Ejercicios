// let miObjeto = {
//   text: "Hola",
//   numero: 20,
//   booleanos: true,
//   arreglo: [1,2,3],
//   objecto: {perro:"Fido"};
//   funncion: function(){
//     return"soy una funcion";
//   }
// };
// console.log(miObjeto);
// console.log(miObjeto.funcion());
//
// let sueldoBase = 500;
// let tarifa= 200;
// let extra= 4;
//
// function calcularSueldo(sueldo, costo, tarifa){
//   return sueldo + (costo * tarifa);
// }
//
// let resulatado = calcularSueldo (sueldoBase, tarifa, extra);
// console.log(resultado);
//
// Orientado objecto
// let empleado = {
//   sueldoBase: 5000,
//   tarifa: 200,
//   extra: 4,
//   calcularSueldo: function() {
//     return this.sueldoBase + (this.extra * this.tarifa)
//   }
// }
// console.log(empleado.calcularSueldo())
//
// Triangulo
//
// let triangulo = {
//   base:10,
//   altura: 20,
//   perimetro: function (){
//       return (this.base + this.base + this.altura + this.altura)
//     },
//   area: function (){
//     return((this.base * this.altura) / 2)
//   }
// }
// console.log(triangulo.area());
//
// //cuadrado
// let cuadrado = {
//   base:10,
//   altura:7
//   perimetro: function (){
//   return (a1 + a1 + b1 + b1)
// }
// function carea (a1, b1){
//   return (a1 * b1)
// }
//
//
// //MetodosYAtributos
//
// Clases-instancia-Objetos
//
// class Perro {
//     constructor(nombre, raza, edad){
//         this.nombre = nombre;
//         this.raza = raza;
//         this.edad = edad;
//     }
//
//     ladrar(){
//       return "woof,woof,woof"
//     }
//
//     comer(comida){
//       return this.nombre + "esta comiendo " + comida
//     }
// }
// let ayudanteDeSanta = new Perro ("Ayudante de Santa", "Galgo", 7)
// console.log(ayudanteDeSanta.comer("croquetas"));
//
// let fido = new Perro ("Fido", "Salchicha", 3);
// console.log(fido.comer("peces"));
//
// //Ejercicio
//
// class Persona {
//   constructor (nombre, edad, sexo, peso, altura){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.sexo = sexo;
//     this.peso = peso;
//     this.altura = altura;
//   }
//   esMayorDeEdad(){
//     if (this.edad > 18){
//     return this.nombre + "es mayor de edad."}
//     else {
//     return this.nombre + "es menor de edad"}
//   }
//   calcularRFC(){
//     this.rfc = this.nombre + this.edad + this.sexo + this.peso + this.altura
//   }
//   calcularIMC(){
//     return (this.peso/(this.altura*this.altura))
//   }
// }
//
// let simon = new Persona ("simon", 17, "M", 64, 1.73);
// simon.calcularRFC();
// console.log(simon.rfc);
//
// //Ejercicio2
// class Cuenta {
//   constructor(titular, cantidad){
//     this.titular = titular;
//     this.cantidad = cantidad;
//   }
//   ingresar(cantidad){
//     if ((this.cantidad + cantidad)>900) {
//       alert ("Cannot")
//     }
//     return ((this.cantidad + cantidad) + " en tu cuenta.")
//   }
//   retirar(cantidad){
//     if ((this.cantidad - cantidad)<10) {
//       alert("Cannot")
//     }
//     else {
//       return ((this.cantidad - cantidad) + " en tu cuenta.")
//     }
//   }
// }
//
// let simon = new Cuenta ("Simon", 300)
// console.log(simon.retirar(100));
//
// //Herencia, super:(herencia del padre)
//
// class Animal {
//   constructor(nombre, peso){
//     this.nombre = nombre,
//     this.peso = peso,
//     console.log("Se creo animal")
//   }
//
//   getNombre(){
//     return this.nombre
//   }
//
//   comer(comida){
//     return ("mi animal esta comiendo" + comida)
//   }
// }
//
// class Perro extends Animal{
//   constructor(nombre, peso, raza, color){
//     super (nombre,peso),
//     this.raza = raza,
//     this.color = color,
//     console.log("Se creo un perro")
//   }
//   ladra(){
//     return "Woof"
//   }
// }
// //Const nunca cambia tambien son globales
// //Var es global
// //Let solamente donde lo declares, en bloques, privacidad
// const pug = new Perro ("Solovino", "12", "Pug", "Negro")
//
// console.log(pug.getNombre());
// console.log(pug.comer(" carnita"));
//
// //Liskov Substitution extiendo cosas del hijo al padre ya que no lo puedes modificar
//
// //Ejemplo1
// class Largometrage {
//   constructor(tiempo){
//     this.tiempo = tiempo
//   }
//   getTiempt(){
//     return this.tiempo
//   }
// }
//
// class Pelicula extends Largometrage{
//   constructor(timepo, genero){
//     super(timepo),
//     this.genero = genero
//   }
// }
//
// class Documental extends Largometrage{
//   constructor(timepo, director){
//     super(timepo),
//     this.directo = director
//   }
// }
//
// class Cine{
//   constructor(largometrage){
//     this.largometrage = largometrage
//   }
//   reproducir(){
//     return "Reproduciendo" + this.largometrage.getTiempo()
//   }
// }
//
// let doc = new Documental ("90min.", "Pedro Torres")
// let peli = new Pelicula ("120min.", "Accion")
//
// let sala1 = new Cine (doc);
// let sala2 = new Cine (peli);
//
// console.log(sala1.reproducir());
// console.log(sala2.reproducir());

//Ejemplo2
//
// class Rectangulo{
//   constructor(alto, ancho){
//     this.ancho = ancho
//     this.alto = alto
//   }
//   getAncho(){
//     return this.getAncho
//   }
//   getAlto(){
//     return this.alto
//   }
//   setAncho(nuevoAncho){
//     this.ancho = nuevoAncho
//   }
//   setAlto(nuevoAlto){
//     this.alto = nuevoAlto
//   }
//   calcularArea(){
//     return this.ancho*this.alto
//   }
// }
//
// let rect = new Rectangulo (12, 45);
// console.log(rect.calcularArea())
//
// class Cuadrado extends Rectangulo{
//   constructor(lado,lado1){
//     super(lado, lado1)
//   }
// }
//
// class Figura {
//   constructor(ladoA, ladoB){
//     this.ladoA = ladoA,
//     this.ladoB = ladoB
//   }
//   calculateArea(){
//     if(this.lado == this.ladoB){
//       return this.ladoA * this.ladoB
//     }
//     else{
//       return this.ladoA * this.ladoB
//     }
//   }
// }
//
//
// let cuadrado1 = new Cuadrado(12,12)
// let rectangulo = new Rectangulo (15,12)
// console.log(
//   cuadrado.calcularArea()
// )

//Practica de Ejercicios
class Electrodomestico {
  constructor(color, consumo, peso){
    this.color = color,
    this.consumo = consumo,
    this.peso = peso,
    this.precio = 0
  }
}

class Lavadora extends Electrodomestico {
  constructor(color, consumo, peso, carga,){
    super(color, consumo, peso),
    this.carga = carga
  }
  calcularPrecio(){
    this.precio = this.consumo*this.carga
    return this.precio
  }
}
let samsung = new Lavadora ("negro", 10, 30, 2);

samsung.calcularPrecio();
console.log(samsung.precio);

// Practica Ejercicios 2
class Construccion {
  constructor(){
    this.numPuertas = numPuertas,
    this.numVentanas = numVentanas,
    this.numPiso = numPiso,
    this.direccion = direccion,
    this.altura = 40,
    this.ancho = 5
  }
}
class Casa extends Construccion{
  constructor(){

  }
}
class Edificio extends Construccion {
  constructor(){
    
  }
}
