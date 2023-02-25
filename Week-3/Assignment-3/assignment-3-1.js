const memoize = (reducerFunction) => {
    let cache = {};

    return (...args) => {
        const key = args.toString();

        if (cache[key]) {
            return cache[key];
        } else {
            cache[key] = reducerFunction(...args);
            return result;
        }
    };
};
  

function add (...args) {
    let result = 0;
    for (const arg of args) {
        result += arg;
    }

    return result;
};

const addM = memoize(add);

function time (fn) {
    console.time();
    fn();
    console.timeEnd();
};

console.log(time(() => addM(100, 100)));;
console.log(time(() => addM(100)));;
console.log(time(() => addM(100, 200)));;
console.log(time(() => addM(100, 100)));;
console.log(time(() => addM(100, 100, 200)));;
console.log(time(() => addM(100, 200, 200)));;
console.log(time(() => addM(200, 200, 200)));;
console.log(time(() => addM(100, 100, 200)));;