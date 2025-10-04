class Calculator{

    addition(num1: number, num2: number) {
        return num1 + num2;
    }

    isGreeter(num1: number, num2: number): boolean {
        return num1 > num2;
    }
}

class Product {
    name: string;
    price: number;
    quantity: number;

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    isInStock(): boolean{
        return this.quantity > 0;
    }
}


const calculator1 = new Calculator();
console.log(calculator1.addition(1,2));
console.log(calculator1.isGreeter(1,2));

const product1 = new Product("Apples", 2,5);
console.log(product1.isInStock());
const product2 = new Product("Oranges", 6,0);
console.log(product2.isInStock());
