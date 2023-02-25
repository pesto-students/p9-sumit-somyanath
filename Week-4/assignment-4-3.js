const Fibonacci = function(number) {
    let previous = 0;
    let current = 0;
    let i = 1;

    return {
        [Symbol.iterator]: function() {
            return {
                next: function() {
                    let result = false;

                    [previous, current] = [current, (current + previous) || 1];

                    result = i++ <= number ? false : true;

                    return { value: previous, done: result }
                }
            }
        }
    }
};

console.log([...Fibonacci(7)]);