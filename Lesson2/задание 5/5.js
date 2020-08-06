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
function getSum( arg1 , arg2 ){
    return (arg1 + arg2 );
}
/**
 * функция принимает 2 параметра и возвращает их разницу 
 * @param {number} a  возвращенные случайное число из функции getRandomInt
 * @param {number} b  возвращенные случайное число из функции getRandomInt
 */
function getSubtraction( arg1 , arg2 ){
    return (arg1 - arg2 );
}
/**
 * функция принимает 2 параметра и возвращает их частное
 * @param {number} a  возвращенные случайное число из функции getRandomInt
 * @param {number} b  возвращенные случайное число из функции getRandomInt
 */
function getDivision(arg1 , arg2 ){
    return (arg1 / arg2 );
}
/**
 * функция принимает 2 параметра и возвращает их произведение
 * @param {number} a  возвращенные случайное число из функции getRandomInt
 * @param {number} b  возвращенные случайное число из функции getRandomInt
 */
function getMultiplication( arg1 , arg2 ){
    return (arg1 * arg2 );
}

/**
 * фунция проверяет переданные значение  и выполняет одну  из арифметических операций
 * @param {number} arg1  возвращенные случайное число из функции getRandomInt
 * @param {number} arg2  возвращенные случайное число из функции getRandomInt
 * @param {string} operation операция введеная пользователем. 
 */
function mathOperation(arg1 , arg2 , operation){
    switch (operation) {
        case "+" :
            return getSum ( arg1 , arg2 );

        case "-" :
            return getSubtraction ( arg1 , arg2 );

        case "/" :
            return getDivision ( arg1 , arg2 ); 

        case "*" :
            return getMultiplication ( arg1 , arg2 );
        
        default : 
            throw new Error(`операция ${operation} не опознана.`)    
    }
}

let arg1 = getRandomInt(100);
let arg2 = getRandomInt(100);
let operation = prompt('Введите знак арифметической операции, которую вы хотели бы произвести')



console.log (mathOperation(arg1, arg2, operation ));
