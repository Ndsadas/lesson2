'use strict';

/**
 * Функция складывает параметры.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}

/**
 * Функция вычитает параметры.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Функция делит параметры.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}

/**
 * Функция умножает параметры.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция с тремя параметрами выполняет арифметическую операциюnumber
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
    }
}

console.log(mathOperation(5, 4, "+"));
console.log(mathOperation(5, 4, "-"));
console.log(mathOperation(5, 4, "/"));
console.log(mathOperation(5, 4, "*"));