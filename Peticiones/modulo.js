let numero = 100;

let funcion = () => {
  console.log("Soy una funcion")
}
module.exports = funcion;

let miObjeto = {
  sumar: function (num1, num2){
    return num1+num2;
  },
  restar : function (num1, num2){
    return num1-num2;
  }
}

module.exports = miObjeto
