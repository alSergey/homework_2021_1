'use strict';

/***
 * Finds gcd of two numbers
 *
 * @param {number} x - first number
 * @param {number} y - second number
 * @returns {number}
 */
const nod = (x, y) => x !== 0 ? nod(y % x, x) : y;

/***
 * Finds gcd of n numbers
 *
 * @param {number[]} numbers - array of numbers
 * @returns {number}
 */
const euclid = (...numbers) => numbers.reduce((max, current) => nod(max, Math.abs(current)), 0)
