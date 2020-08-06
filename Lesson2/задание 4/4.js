'use strict';

/**
 * функция выбирает произвольное число от 0 и до указанного параметра
 * @param {number} max 
 */
function getRandomInt( max ){
    return Math.round(Math.random() * Math.round(max));
}
/**
 * функция принимает 2 параметра и возвращает их сумму
 * @param {number} a  возвращенные случайное число из функции getRandomInt
 * @param {number} b  возвращенные случайное число из функции getRandomInt
 */
function getSum( a , b ){
    return (a + b );
}
/**
 * функция принимает 2 параметра и возвращает их разницу 
 * @param {number} a  возвращенные случайное число из функции getRandomInt
 * @param {number} b  возвращенные случайное число из функции getRandomInt
 */
function getSubtraction( a , b ){
    return (a - b );
}
/**
 * функция принимает 2 параметра и возвращает их частное
 * @param {number} a  возвращенные случайное число из функции getRandomInt
 * @param {number} b  возвращенные случайное число из функции getRandomInt
 */
function getDivision( a , b ){
    return (a / b );
}
/**
 * функция принимает 2 параметра и возвращает их произведение
 * @param {number} a  возвращенные случайное число из функции getRandomInt
 * @param {number} b  возвращенные случайное число из функции getRandomInt
 */
function getMultiplication( a , b ){
    return (a * b );
}



let a = getRandomInt(100);
let b = getRandomInt(100);

let c = getSum( a , b );
console.log (c);

c = getSubtraction( a , b );
console.log (c);

c = getDivision( a , b);
console.log(c);

c = getMultiplication( a , b );
console.log(c);