// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

function NaturalFruction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

function calcCommonDenominator(num1, num2) {

    let i = num1.denominator > num2.denominator ? num1.denominator : num2.denominator;
    for (i; true; i++) {
        if ((i % num1.denominator === 0) && (i % num2.denominator === 0)) {
            commonDenominator = i;
            break;
        }
    }

    return commonDenominator;
}

function sum(num1, num2) {
    let commonDenominator = calcCommonDenominator(num1, num2);

    let numerator1 = num1.numerator * (commonDenominator / num1.denominator);
    let numerator2 = num2.numerator * (commonDenominator / num2.denominator);
    let sum = numerator1 + numerator2;

    return `${sum} / ${commonDenominator}`;
}

function subtraction(num1, num2) {
    let commonDenominator = calcCommonDenominator(num1, num2);

    let numerator1 = num1.numerator * (commonDenominator / num1.denominator);
    let numerator2 = num2.numerator * (commonDenominator / num2.denominator);
    let sum = numerator1 - numerator2;

    return `${sum} / ${commonDenominator}`;
}

function multiplication(num1, num2) {
    let resultNumerator = num1.numerator * num2.numerator;
    let resultDenominator = num1.denominator * num2.denominator;

    return `${resultNumerator} / ${resultDenominator}`;
}

function division(num1, num2) {
    let resultNumerator = num1.numerator * num2.denominator;
    let resultDenominator = num1.denominator * num2.numerator;

    return `${resultNumerator} / ${resultDenominator}`;
}

function reduction(obj) {
    let i = obj.denominator > obj.numerator ? obj.numerator : obj.denominator;

    for (i; i > 1; i--) {
        if ((obj.numerator % i === 0) && (obj.denominator % i === 0)) {
            obj.numerator /= i;
            obj.denominator /= i;
        }
    }

    return `${obj.numerator} / ${obj.denominator}`;
}


let fruction1 = new NaturalFruction(6, 15);
let fruction2 = new NaturalFruction(8, 30);
let fruction3 = new NaturalFruction(27, 45);

console.log(sum(fruction1, fruction2));
console.log(subtraction(fruction1, fruction2));
console.log(multiplication(fruction1, fruction2));
console.log(division(fruction1, fruction2));
console.log(reduction(fruction3));