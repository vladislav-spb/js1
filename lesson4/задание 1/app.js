'use strict';

/**
 * функция на выход выводит объект со свойствами разряда чисел
 * @param {number} num случайное сгенерированное число
 */
function getDigits (num){
    if(Number.isInteger(num) || num < 999 || num > 0){
        return{
            units: (num % 10),
            Tens: Math.floor(num / 10) %10,
            hunders: Math.floor(num / 100)
        };
    }
    return{};
    
}

/**
 * функция случайно генерирует целое число
 * @param {numder} min минимальное значение 
 * @param {numder} max максимальное значение
 */
function getRandomNumber(min,max){
    return(Math.floor(Math.random() * (max - min)) + min)
} 

let num = getRandomNumber(0,999);

console.log(getDigits(num));