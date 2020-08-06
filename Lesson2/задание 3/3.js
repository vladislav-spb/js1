'use strict';

/**
 * функция выбирает произвольное число от 0 и до указанного параметра
 * @param {number} max  максильмальное число  в пределах которого случайно выбирает число
 */
function getRandomInt(max){
    return Math.round(Math.random() * Math.round(max));
}

let a = getRandomInt(-12);
let b = getRandomInt(33);

if( a >= 0 && b >= 0){
    console.log( a - b );
} else if ( a < 0 && b < 0 ){
    console.log( a * b );
} else if ( a * b < 0) {
    console.log( a + b );
}