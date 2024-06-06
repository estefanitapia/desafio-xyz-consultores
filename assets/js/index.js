import { Cliente } from "./Dominio/cliente.js";
import { Impuesto } from "./Dominio/impuesto.js";

const impuesto1 = new Impuesto (2000, 200);
const cliente1 = new Cliente ("Juanito", impuesto1);

console.log(cliente1.calcularImpuesto());