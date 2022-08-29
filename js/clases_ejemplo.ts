abstract class Operacion {
    protected na : number;
    protected nb : number;
    protected result : number;

    constructor() {
        this.na = 0;
        this.nb = 0;
        this.result = 0;
    }

    set ValorA(value: number) {
        this.na = value;
    }

    set ValorB(value: number) {
        this.nb = value;
    }

    get Resultado():number {
        return this.result;
    }
}

interface IOperacion{
    Operar(a: number, b: number): number;
}

class Suma extends Operacion{
    Sumar (){
        this.result = this.na + this.nb;
    }
}

class Resta extends Operacion{
    Restar () {
        this.result = this.na - this.nb;
    }
}

let opSuma = new Suma();

opSuma.ValorA = 25;
opSuma.ValorB = 72;
opSuma.Sumar();
console.log("El resultado de la suma es: " + opSuma.Resultado)

let opResta = new Resta();

opResta.ValorA = 35;
opResta.ValorB = 21;
opResta.Restar();
console.log("El resultado de la resta es: " + opResta.Resultado)

//Metodo Estatico

class MetodoEstatico {
    public static Estatico(): void {console.log("Esto es un Metodo Estatico")}
}

//Interfaces 

interface IPersona {
    nombre: string;
    edad: number;
    direccion: IDireccion,
    mostrarDireccion: () => string;
}

interface IDireccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const persona: IPersona ={
    nombre: 'Nazareno',
    edad: 19,
    direccion: {
        calle: 'Belgrano',
        pais: 'Argentina',
        ciudad: 'Alta Gracia'
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.edad + ' Años' + ',' + this.direccion.pais + ',' + this.direccion.ciudad
    }
}

console.log(persona.mostrarDireccion());



