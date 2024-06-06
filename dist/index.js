"use strict";

var _cliente = require("./Dominio/cliente.js");
var _impuesto = require("./Dominio/impuesto.js");
var impuesto1 = new _impuesto.Impuesto(2000, 200);
var cliente1 = new _cliente.Cliente("Juanito", impuesto1);
console.log(cliente1.calcularImpuesto());