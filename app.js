'use strict';


// Version 1 of roll D20
/*
function roll20() {
    var min = 1;
    var max = 20;
    var random = Math.random() * (+max - +min) + +min;
    return Math.floor(random);
}

console.log(d20());
*/

// Version 2 of roll D20 (OOP) ------------------------------------------------------------
/* TODO: Think of giving each value on the face of a D20 a 5% chance to show that number */

// Define a Dice
    // a dice has 2 characteristics, a minimum value and a max value
/* function Dice(maxValue) {
    const minValue = 1;
    this.maxValue = maxValue;

    // Dice are used to perform a random roll functionality
    this.roll = function () {
        var random = Math.random() * (+maxValue - +minValue) + +minValue;
        return Math.floor(random);
    };
}
*/

// Updated to: ECMAScript 2015 Classes
class Dice {
    constructor(maxValue) {
        this.maxValue = maxValue;
    }

    roll() {
        const minValue = 1;
        var maxValue = this.maxValue;
        var random = Math.random() * (+maxValue - +minValue) + +minValue;
        return Math.floor(random);
    }
}

// Instantiate the kinds of dice
const d20 = new Dice(20);
const d12 = new Dice(12);
const d10 = new Dice(10);
const d8 = new Dice(8);
const d6 = new Dice(6);
const d4 = new Dice(4);

// roll a d20
console.log( d20.roll() ); // generates a random number from 1 to 20



/// Version 1 of an entity ----------------------------------------
