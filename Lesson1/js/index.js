'use strict';
//ЗАДАНИЕ 1
let temC = +prompt("Введите температуру в цельсиях");
let temF = (9 / 5) * temC + 32;

alert( `Введенная вами температура равняется ${temF} градусов по Фаренгейту.` );

//ЗАДАНИЕ 2

let name = "Василий";
let admin = name;

console.log(admin);

//ЗАДАНИЕ 3

 let result = 10 + 10 + "10";
 console.log(result);
 /*
 1 10 прибавляем 10 и получаем число 20
 2 далее происходит Конкатенация суммы сложения (JS производит не явное приведение типа) и строки 10, и получаем строку 2010
 3 строку 2010 присваиваем в переменную result
 4 с помощью console.log выводим result в консоль
 */

let result2 = 10 + "10" + 10;
 console.log(result2);
 /*
 1 к числу 10 хотим прибавить строку 10 и происходит Конкатенация и получается строка 1010
 2 далее происходит Конкатенация предыдущего вычесления строки 1010 и числом 10, и JS производит не явное приведение типа 
 3 строку 101010 присваиваем в переменную result2
 4 с помощью console.log выводим result2 в консоль
 */

let result3 = 10 + 10 + +"10";
 console.log(result3);
 /*
 1 10 прибавляем 10 и получаем число 20
 2 унарный плюс превращает строку 10 в число 10 и прбавляем сумму предыдущего сложения и получаем число 30
 3 число 30 присваиваем в переменную result3
 4 с помощью console.log выводим result3 в консоль
 */

let result4 = 10 / -"";
 console.log(result4);
 /*
 1 унарный минус превращает пустую строку в -0
 2 далее 10 делим на -0 и получаем -Infinity
 3 значение -Infinity присваиваем в переменную result4
 4 с помощью console.log выводим result4 в консоль
 */

let result5 = 10 / +"2,5";
 console.log(result5);
 /*
 1 унарный  плюс пытается превратить строку 2,5 в число (и не удается, потому что стоит запятая а не точка) получается NAN  
 2 далее 10 делим на NAN и получаем NAN
 3 NAN присваиваем в переменную result5
 4 с помощью console.log выводим result5 в консоль
 */

// ЗАДАНИЕ 4

let mode = "normal";        // является корректным
let my_valu3 = 102;         // является корректным
//let 3my_value3 = "102";     // является не корректным, потому что имя переменной не может начинаться с числа 
let __hello__ = "world";    // является корректным
let $$$ = "money";          // является корректным
//let !0_world = true;        // является не корректным, потому что не может быть спец символов