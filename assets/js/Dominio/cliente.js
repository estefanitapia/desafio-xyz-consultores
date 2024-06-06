export class Cliente {
    // Se declaran los atributos de la clase cliente en valores protegidos, agregando # al inicio.
    #nombre;
    #impuesto;

    constructor(nombre, impuesto) {
        this.#nombre = nombre;
        this.#impuesto = impuesto;
    }

    /* Getter */
    get nombre() {
        return this.#nombre; //Devuelve el dato protegido
    }
    /* Setter */
    set nombre(newValue) {
        this.#nombre = newValue;
    }
     /* Getter */
    get impuesto() {
        return this.#impuesto; //Devuelve el dato protegido
    }
     /* Setter */
    set impuesto(newValue) {
        this.#impuesto = newValue;
    }

    calcularImpuesto() {
        return (this.#impuesto.montoBrutoAnual - this.#impuesto.deducciones) * 0.21;
    }
}