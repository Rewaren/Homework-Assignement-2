class Calculator{

    addition(num1: number, num2: number) {
        return num1 + num2;
    }

    isGreeter(num1: number, num2: number): boolean {
        return num1 > num2;
    }
}

const calculator1 = new Calculator();
console.log(calculator1.addition(1,2));
console.log(calculator1.isGreeter(1,2));