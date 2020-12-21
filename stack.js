var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    };
    Stack.prototype.print = function () {
        console.log(this.elements);
    };
    return Stack;
}());
var stackObject = new Stack(100);
function muestraMensaje() {
    var inputValue = document.getElementById('inputField').value;
    console.log("Valor ingresado: " + inputValue);
    if (!stackObject.isFull()) {
        stackObject.push(inputValue);
    }
    else {
        console.log("Stack Full");
    }
}
function showItems() {
    console.log('/*************Items*******************/');
    var counter = 1;
    while (!stackObject.isEmpty()) {
        var item = stackObject.pop();
        console.log("Nro:" + counter + " - Item: " + item);
        counter++;
    }
    stackObject.print();
}
/*let numbers = new Stack<number>(5);
while(!numbers.isFull()) {
    let n: number = Math.random();
    console.log(`the number is ${n}`);
    numbers.push(n);
}
while(!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`the value of the stack is ${n}`);
}*/ 
