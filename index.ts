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