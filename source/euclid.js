'use strict';

/***
 * Находит НОД двух чисел
 *
 * @param x - первое число
 * @param y - второе число
 * @returns {number}
 */
const nod = (x, y) => x !== 0 ? nod(y % x, x) : y;

/***
 * Находит НОД n чисел
 *
 * @param numbers - n чисел
 * @returns {number}
 */
const euclid = (...numbers) => numbers.reduce((max, current) => nod(max, Math.abs(current)), 0)
