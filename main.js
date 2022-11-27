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
    }

    getArbol() {
        return this.raiz;
    }

    crearArbol(expresion) {
        let vector = Array.from(expresion);
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

    preOrder() {
        let vector = [];
        let aux = this._preOrder(this.raiz, vector);
        let str = "";
        for (let i = 0; i < aux.length; i++) {
            str += aux[i];
        }
        return str;

    }

    _preOrder(nodo, vector) {
        if (nodo != null) {
            vector.push(nodo.dato);
            this._preOrder(nodo.hijoIzq, vector);
            this._preOrder(nodo.hijoDer, vector);
        } return vector;




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




}

let arbol = new Arbol();
//console.log(arbol.crearArbol("3*9-6*3/2+3*6+5*4/2"))
arbol.crearArbol("1+2*3/2+3*6+5*4/2")
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



