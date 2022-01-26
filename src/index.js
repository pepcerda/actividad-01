
class A {
    constructor(foo, bar, lorem) {
        this.foo = foo; 
        this.bar = bar;
        this.lorem = lorem;  
    }

    getFoo() {
       return this.foo;  
    }

    getBar() {
        return this.bar; 
    }

    getLorem() {
        return this.lorem; 
    }

    displayInfo() {
        console.log(`Esta clase tiene dos atributos que son: ${this.foo}, ${this.bar} y ${this.lorem}`); 
    }
}

const instanciaA = new A("foo", "bar", "lorem"); 
instanciaA.displayInfo(); 

const mostrarAtributos = () => {
    let atr1 = document.getElementById("atributo1");
    let atr2 = document.getElementById("atributo2");
    let atr3 = document.getElementById("atributo3");
    atr1.innerHTML=instanciaA.getFoo(); 
    atr2.innerHTML=instanciaA.getBar();  
    atr3.innerHTML=instanciaA.getLorem();  
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

class C {
    constructor(num1, num2) {
        this.num1=num1; 
        this.num2=num2; 
    }

    suma() {
        return this.num1 + this.num2; 
    }

    resta() {
        return this.num1 - this.num2; 
    }

    multiplica() {
        return this.num1 * this.num2; 
    }
}

const sumar = () => {
    let num1 = document.getElementById("num1"); 
    let num2 = document.getElementById("num2"); 
    let instanciaC = new C(num1.value, num2.value); 
    let salida = document.createElement("INPUT"); 
    salida.setAttribute("type", "number"); 
    salida.setAttribute("value", Number(instanciaC.suma())); 
    document.body.appendChild(salida); 
}

const restar = () => {
    let num1 = document.getElementById("num1"); 
    let num2 = document.getElementById("num2"); 
    let instanciaC = new C(num1.value, num2.value);  
    let salida = document.createElement("INPUT"); 
    salida.setAttribute("type", "number");
    salida.setAttribute("value", instanciaC.resta()); 
    document.body.appendChild(salida); 
}

const multiplicar = () => {
    let num1 = document.getElementById("num1"); 
    let num2 = document.getElementById("num2"); 
    let instanciaC = new C(num1.value, num2.value); 
    let salida = document.createElement("INPUT"); 
    salida.setAttribute("type", "number");
    salida.setAttribute("value", instanciaC.multiplica()); 
    document.body.appendChild(salida); 
}



