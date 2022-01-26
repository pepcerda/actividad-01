
class A {
    constructor(foo, bar) {
        this.foo = foo; 
        this.bar = bar; 
    }

    getFoo() {
       return this.foo;  
    }

    getBar() {
        return this.bar; 
    }

    displayInfo() {
        console.log(`Esta clase tiene dos atributos que son: ${this.foo} y ${this.bar}`); 
    }
}

const instanciaA = new A("foo", "bar"); 
instanciaA.displayInfo(); 

const mostrarAtributos = () => {
    let atr1 = document.getElementById("atributo1");
    let atr2 = document.getElementById("atributo2");
    atr1.innerHTML=instanciaA.getFoo(); 
    atr2.innerHTML=instanciaA.getBar();  
}

class B {
    constructor(input) {
        this.input=input; 
    }

    mostrarAlerta() {
        alert(`El usuario ha introducido: ${this.input}`); 
    }
}

const leerValoryMostrar = () => {
    const inputUser = document.getElementById("inputUser"); 
    const instanciaB = new B(inputUser.value);
    instanciaB.mostrarAlerta();  
}

