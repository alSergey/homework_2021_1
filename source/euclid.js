'use strict';

const nod = function (x, y) {
    return x !== 0 ? nod(y % x, x) : y;
};

const euclid = function (...numbers) {
    let max = 0;

    numbers.map((i) =>
        max = nod(Math.abs(i), max)
    );

    return max;
};