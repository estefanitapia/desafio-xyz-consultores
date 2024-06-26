export class Impuesto {
    // Se declaran los atributos de la clase cliente en valores protegidos, agregando # al inicio.
    #montoBrutoAnual;
    #deducciones;

    constructor(montoBrutoAnual, deducciones) {
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }
        /* Getter */
    get montoBrutoAnual() {
        return this.#montoBrutoAnual; //Devuelve el dato protegido
    }
    /* Setter */
    set montoBrutoAnual(newValue) {
        this.#montoBrutoAnual = newValue;
    }
     /* Getter */
    get deducciones() {
        return this.#deducciones; //Devuelve el dato protegido
    }
     /* Setter */
    set deducciones(newValue) {
        this.#deducciones = newValue;
    }
}