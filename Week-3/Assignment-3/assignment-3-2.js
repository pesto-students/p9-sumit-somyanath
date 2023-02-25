const car = {
    name: 'BMW',
    getCarDetails: function (model, year) {
        return `The car is ${this.name}, ${model} model of ${year} year`;
    }
};

const getCar = car.getCarDetails;
console.log(getCar('X3', '2022'));

/* Here when we are calling the function in line no. 9, we will get "undefined" as the result & the reason being that when called on line no. 9 the value of this is "window" or "global", because of which the function tries to find the value of "this.name" and in the "global" scope there is no such variable, so "global.name" gives us "undefined" */


/* 1. bind example */
const getBindCar = car.getCarDetails.bind(car, 'X3-bind', '2022');
console.log(getBindCar('2021'));

/* In order to secure the value of "this" of getCar with the object "car", we can use a method of "function" called as "bind". The 1st argument is the object itself & the remaining are the arguments passed individually that the function take & the arguments passed here takes precedence over the one passed in the actual function call. */

/* Also, one of the most important thing to take into account here is that bind creates another copy of the function with a different value of "this". */


/* 2. call example */
console.log(car.getCarDetails.call(car, 'X3-call', '2022'));

/* Here we are using another method of "function" called as "call". The syntax is same as that of "bind" */

/* The only difference from "bind" is that, here "call" calls the function instead of making a new copy of the function. */


/* 3. apply example */
console.log(car.getCarDetails.apply(car, ['X3-apply', '2022']));

/* Here we are using another method of "function" called as "apply". It takes in 2 arguments, the 1st one is the object itself & the second is the array having list of arguments. */

/* The only difference from "call" is that, here "apply" accepts a single "array of arguments" whereas "call" accepts an individual argument list. */