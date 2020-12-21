class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size;
    }

    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }

    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
    
    print(){
        console.log(this.elements);
    }
}

let stackObject = new Stack<string>(100);

function muestraMensaje() {
    let inputValue = (<HTMLInputElement>document.getElementById('inputField')).value;
    console.log("Valor ingresado: "+ inputValue);
    if(!stackObject.isFull()){
        stackObject.push(inputValue);
    }else{
        console.log("Stack Full");
    }

}  

function showItems(){
    console.log('/*************Items*******************/');

    let counter : number = 1;
    while(!stackObject.isEmpty()){
        let item = stackObject.pop();

        console.log(`Nro:${counter} - Item: ${item}`);
        counter++;
    }
    //stackObject.print();
}