
let nombreNegocio = prompt('Ingrese el nombre del negocio')
let numero_de_clientes = prompt('Ingrese mediante un numero entero el numero de clientes a ingresar');


let contador = 0;
let listaClientes = []

class Negocio {
    constructor(nombre, cliente) {

        this._nombre = function () {
            return nombre;
        };

        this._cliente = function () {
            return cliente || [];
        };

    }
    getName() {
        return this._nombre();
    }
    setName(nuevo_nombre) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }
    agregarCliente(cliente) {
        this.cliente.push(cliente);
    }

    getClientes() {

        this._cliente().forEach(function (elemento, index) {
            console.log(`Numero de Cliente: ${index}`);
            console.log(`Nombre: ${elemento._nombre()}`);
            console.log(`Edad: ${elemento._edad()}`);
            console.log(`DNI: ${elemento._dni()}`);
            console.log(`Prenda: ${elemento._prenda()}`);
            console.log(`Valor de la prenda: ${elemento._valorPrenda()}`);
        });

    }

    getValorTotalClientes(){
        let valorPrendas = []
        this._cliente().forEach(function (elemento, index) {
            valorPrendas.push(elemento._valorPrenda());
        });
        console.log('Valor total de prendas', valorPrendas.reduce( ( valorAnterior, valorActual ) => valorAnterior+valorActual, 0 ))
    }

    getClienteNombre( busquedaDeNombre ) {

        this._cliente().forEach(function (elemento, index) {

            if (elemento._nombre() == busquedaDeNombre) {

                console.log(`Numero de Cliente: ${index}`);
                console.log(`Nombre: ${elemento._nombre()}`);
                console.log(`Edad: ${elemento._edad()}`);
                console.log(`DNI: ${elemento._dni()}`);
                console.log(`Prenda: ${elemento._prenda()}`);
                console.log(`Valor de la prenda: ${elemento._valorPrenda()}`);

            }

        });

    }
}
 
class Cliente {

    constructor( nombre, edad, dni, prenda, valorPrenda ) {

        this._nombre = function () {
            return nombre;
        };

        this._edad = function () {
            return edad;
        };

        this._dni = function () {
            return dni;
        };

        this._prenda = function () {
            return prenda;
        };

        this._valorPrenda = function () {
            return valorPrenda;
        };

    }
    getName() {
        return this._nombre();
    }
    getEdad() {
        return this._edad();
    }
    getRut() {
        return this._dni();
    }
    getDiagnostico() {
        return this._prenda();
    }

    getValortencion() {
        return this._valorPrenda();
    }

    setName(nuevo_nombre) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }
    setEdad(nueva_edad) {
        this._edad = function () {
            return nueva_edad;
        };
    }
    setDni(nuevo_dni) {
        this._dni = function () {
            return nuevo_dni;
        };
    }
    setPrenda(nuevo_prenda) {
        this._prenda = function () {
            return nuevo_prenda;
        };
    }
}


while( contador < numero_de_clientes ){

      
      let nombre = prompt('Ingrese el nombre del cliente')
      let edad = parseInt(prompt('Ingrese la edad'))
      let dni = prompt('Ingrese el dni')
      let prenda = prompt('Ingrese prenda')
      let valorPrenda = parseInt(prompt('Ingrese Valor de la prenda'))
      let cliente = new Cliente( nombre, edad, dni, prenda,valorPrenda )
      
      listaClientes.push( cliente )
      
   
      contador++

}

let buscar = prompt('Ingrese el nombre del cliente que desea buscar')

const imprimirNegocio = ( negocio, clientes, buscar )=>{
    
    console.log( 'Nombre del negocio:', negocio.getName() )
    console.log('=================NOMBRE DE CLIENTES OBJETO CLIENTE====================')
    
    // console.log( 'Salida de ARRAY OBJETOS CLIENTES',clientes )
    for(let cliente of clientes){
        console.log('Salida de cliente', cliente._nombre())
    }
    console.log('=================SALIDA DE CLIENTES POR NEGOCIO====================')
    negocio.getClientes() 
    console.log('=================SALIDA DE CLIENTE BUSCADO POR NOMBRE====================')
    negocio.getClienteNombre(buscar);
    console.log('=================VALOR TOTAL DE PRENDAS DEL NEGOCIO====================')
    negocio.getValorTotalClientes();
}

let negocio = new Negocio( nombreNegocio, listaClientes )

imprimirNegocio( negocio,listaClientes, buscar )

