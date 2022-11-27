/*
1-resivir una expresion
2-trasformarla a arbol
3-crear la preorder y el posorder
4-resolover el preorder o posorder
5-resivir los preorder o los posorder
*/
class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.hijoIzq = null;
        this.hijoDer = null;
    }
}

class Arbol {
    constructor() {
        this.raiz = null;
        this.str = null;
    }

    getArbol() {
        return this.raiz;
    }

    crearArbol(expresion) {
        let vector = Array.from(expresion);
        for (let i = 0; i < vector.length; i++) {
            if (vector[i] == '0' || vector[i] == '1' || vector[i] == '2' || vector[i] == '3' || vector[i] == '4' || vector[i] == '5' || vector[i] == '6' || vector[i] == '7' || vector[i] == '8' || vector[i] == '9') {
                vector[i] = Number(vector[i]);
            }
        }
        let temp1 = [];
        let temp2 = [];
        let nodo = new Nodo();
        for (let i = vector.length; i >= 0; i--) {
            if (this.raiz === null) {
                if (vector[i] == "+" || vector[i] == "-") {
                    nodo.dato = vector[i];
                    this.raiz = nodo;
                    temp1 = vector.slice(0, i);
                    temp2 = vector.slice(i + 1, vector.length);
                }
            }
        }

        temp1 = this._crearArbol(temp1);
        temp2 = this._crearArbol(temp2);

        let aux = this.raiz;
        aux.hijoIzq = temp1[0];
        aux.hijoDer = temp2[0];

    }
    
    _crearArbol(vector) {
        let nodo = new Nodo();
        for (let i = 0; i < vector.length; i++) {
            if (vector[i] == "*" || vector[i] == "/") {
                nodo.dato = vector[i];
                nodo.hijoIzq = vector[i - 1];
                nodo.hijoDer = vector[i + 1];
                vector.splice(i - 1, 3, nodo);
                this._crearArbol(vector);
            }
        }

        let nodo2 = new Nodo();
        for (let i = 0; i < vector.length; i++) {
            if (vector[i] == "+" || vector[i] == "-") {
                nodo2.dato = vector[i];
                nodo2.hijoIzq = vector[i - 1];
                nodo2.hijoDer = vector[i + 1];
                vector.splice(i - 1, 3, nodo2);
                this._crearArbol(vector);
            }
        }
        return vector;
    }

    resolverPreOrder(expresion) {
        let vector = [];
        if (typeof expresion === "string") {
            vector = Array.from(expresion);
        } else {
            vector = expresion;
        }
        let aux = 0;
        for (let i = vector.length; i >= 0; i--) {
            if (vector[i] == "+") {
                aux = Number(vector[i + 1]) + Number(vector[i + 2]);
                vector.splice(i, 3, aux);
                this.resolverPreOrder(vector);
            } else if (vector[i] == "-") {
                aux = Number(vector[i + 1]) - Number(vector[i + 2]);
                vector.splice(i, 3, aux);
                this.resolverPreOrder(vector);
            } else if (vector[i] == "*") {
                aux = Number(vector[i + 1]) * Number(vector[i + 2]);
                vector.splice(i, 3, aux);
                this.resolverPreOrder(vector);
            } else if (vector[i] == "/") {
                aux = Number(vector[i + 1]) / Number(vector[i + 2]);
                vector.splice(i, 3, aux);
                this.resolverPreOrder(vector);
            }
        }
        return vector[0];
    }

    resolverPosOrder(expresion) {
        let vector = [];
        if (typeof expresion === "string") {
            vector = Array.from(expresion);
        } else {
            vector = expresion;
        }
        let aux = 0;
        for (let i = 0; i < vector.length; i++) {
            if (vector[i] == "+") {
                aux = Number(vector[i - 2]) + Number(vector[i - 1]);
                vector.splice(i - 2, 3, aux);
                this.resolverPosOrder(vector);
            } else if (vector[i] == "-") {
                aux = Number(vector[i - 2]) - Number(vector[i - 1]);
                vector.splice(i - 2, 3, aux);
                this.resolverPosOrder(vector);
            } else if (vector[i] == "*") {
                aux = Number(vector[i - 2]) * Number(vector[i - 1]);
                vector.splice(i - 2, 3, aux);
                this.resolverPosOrder(vector);
            } else if (vector[i] == "/") {
                aux = Number(vector[i - 2]) / Number(vector[i - 1]);
                vector.splice(i - 2, 3, aux);
                this.resolverPosOrder(vector);
            }
        }

        return vector[0];
    }

    preOrder() {
        this.str = "";
        if (this.raiz == null) {
            return false;
        } else {
            this._preOrder(this.raiz);
        }
        return this.str;
    }

    _preOrder(nodox) {
        if(nodox == 1){
            this.str += "1";
        }else if(nodox == 2){
            this.str += "2";
        }else if(nodox == 3){
            this.str += "3";
        }else if(nodox == 4){
            this.str += "4";
        }else if(nodox == 5){
            this.str += "5";
        }else if(nodox == 6){
            this.str += "6";
        }else if(nodox == 7){
            this.str += "7";
        }else if(nodox == 8){
            this.str += "8";
        }else if(nodox == 9){
            this.str += "9";
        }else if(nodox == 0){
            this.str += "0";
        }else{
        this.str = this.str + `${nodox.dato}`;
        }
        if (nodox.hijoIzq != null) {
            this._preOrder(nodox.hijoIzq);
        }
        if (nodox.hijoDer != null) {
            this._preOrder(nodox.hijoDer);
        }

    }

    posOrder() {
        this.str = '';
        if (this.raiz == null) {
            return false;
        } else {
            this._posOrder(this.raiz);
        }
        return this.str;
    }

    _posOrder(nodox) {

        if(nodox == 1){
            this.str += "1";
        }else if(nodox == 2){
            this.str += "2";
        }else if(nodox == 3){
            this.str += "3";
        }else if(nodox == 4){
            this.str += "4";
        }else if(nodox == 5){
            this.str += "5";
        }else if(nodox == 6){
            this.str += "6";
        }else if(nodox == 7){
            this.str += "7";
        }else if(nodox == 8){
            this.str += "8";
        }else if(nodox == 9){
            this.str += "9";
        }else if(nodox == 0){
            this.str += "0";
        }else{
        this.str = this.str + `${nodox.dato}`;
        }
        if (nodox.hijoIzq != null) {
            this._posOrder(nodox.hijoIzq);
        }
        if (nodox.hijoder != null) {
            this._posOrder(nodox.hijoDer);
        }
        this.str += nodox.dato;

    }

}

let arbol = new Arbol();
//console.log(arbol.crearArbol("3*9-6*3/2+3*6+5*4/2"))
arbol.crearArbol("3*9-6*3/2+3*6+5*4/2")
console.log(arbol.getArbol());
//console.log(arbol.preOrder());

/*console.log(arbol.resolverPreOrder('++-+4*3269/*369'));
console.log(arbol.resolverPreOrder('++-*39/*632*36/*542'));
//++-+4*3269/*369
//++-+4*3269/189
//++-+4*32692
//++-+46692
//++-10692
//++492
//+132
//15
console.log(arbol.resolverPosOrder('432*+6-9+36*9/+'));
console.log(arbol.resolverPosOrder('39*63*2/-36*+54*2/+'));
//432*+6-9+36*9/+
//46+6-9+36*9/+
//(10)6-9+36*9/+
//(4)9+36*9/+
//(13)36*9/+
//(13)(18)9/+
//(13)(2)+
//(15)*/
