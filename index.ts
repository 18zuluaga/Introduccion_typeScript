type Objeto = {
    id: number,
    name: string,
    precio: number
}

function isPar(n: number): boolean {
    return n % 2 === 0;
}
console.log(isPar(77))

function classifyNumberIf(num: number): string {
    if (num > 0) {
        return "positivo";
    } else if (num < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

function classifyNumberSwitch(num: number): string {
    switch (true) {
        case num > 0:
            return "positivo";
        case num < 0:
            return "negativo";
        case num === 0:
            return "cero";
        default:
            return "valor no válido";
    }
}

console.log(classifyNumberIf(5));
console.log(classifyNumberSwitch(-3));

function printNames(names: string[]): void {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

const nameArray: string[] = ["Ana", "Juan", "Carlos", "Sofía", "María"];
console.log(printNames(nameArray))

const numerosArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numerosArray.reduce((a, b) => a + b))

function joinArray(array: string[]): string {
    return array.join(", ");
}

console.log(joinArray(nameArray))

interface User {
    id: number,
    name: string
}

const arrayObjetos: User[] = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Juan" },
    { id: 3, name: "Carlos" },
    { id: 4, name: "Sofía" },
    { id: 5, name: "María" },
];

function getUserNames(users: User[]) {
    users.map((user) => console.log(user.name));
}

getUserNames(arrayObjetos)

interface ICar {
    marca: string,
    modelo: string,
    año: number
}

const car: ICar = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}

console.log(car.año)
console.log(car.marca)
console.log(car.modelo)

class Car {
    static infoCar(car: ICar) {
        console.log(car.marca)
        console.log(car.modelo)
        console.log(car.año)
    }
}

Car.infoCar(car)

function incrementarAñoCar(car: ICar) {
    car.año += 1
    return car
}

console.log(incrementarAñoCar(car))


const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getMaxNumber(array: number[]): number {
    return array.reduce((a, b) => Math.max(a, b));
}

console.log(getMaxNumber(arrayNumber))

function checkTypeOfArray(...array: any[]): string | void {
    if (typeof array[0] === typeof array[1]) {
        array.forEach((element) => {
            console.log(typeof element);
            if (typeof element != typeof array[0]) {
                console.log(`el elemneto ${element} no es de tipo ${typeof array[0]}`);
                return `el elemneto ${element} no es de tipo ${typeof array[0]}`;
            }
        })
    } else {
        return "los primeros dos elementos son de difernete tipo";
    }
}

console.log(checkTypeOfArray(1, 2, 3, 4));

function rotateMatrix(array: number[][]): number[][] {
    let newArray: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < array.length; j++) {
            newArray[j][i] = array[array.length - 1 - i][j];
        }
    }
    return newArray;
}

console.log(rotateMatrix([[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]))


class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}

let person = new Person("Alice", 30);
console.log(person.greet());