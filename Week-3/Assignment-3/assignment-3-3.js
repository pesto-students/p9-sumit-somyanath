function createIncrement () {
    let count = 0;

    function increment () {
        count++;
    }

    let message = `Count is ${count}`;

    function log () {
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();

/* The output of the above code is "Count is 0". The reasoning behind this lies in two things, one is closure & the second one is encapsulation. Talking about closure, the functions "increment" & "log", when they are initialised at line number 17, create a closure with "createIncrement". When "increment" is called it does increases the value of count but does not changes the value of "message" variable. Also, talking about the concept of encapsulation, as both the variables "count" and "message" are not accessible out of the function, the only way to access those is through their functions "increment" & "log". Also, "message" is not changed by any of the two functions.  */

/* So, because of these two reasons the value of the "message" variable is not changed and the value of "count" used while creation of "message" was "0". So, the output is such */
