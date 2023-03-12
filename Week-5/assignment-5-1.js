/**
 * generateRandomNumber generates random numbers in range of 0 to 10
 * @returns the sequence of numbers generated
 */
function* generateRandomNumbers() {
    let number = 0;

    while (true) {
        number = Math.ceil(Math.random() * 10);
        if (number < 10) {
            yield number;
        }
        else {
            return;
        }
    }
};

/**
 * asyncTask is used to delay the tasks
 * @param delay is the time in ms
 * @returns the promise
 */
function asyncTask(delay) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(delay >= 3000) {
                resolve();
            }
            else {
                reject();
            }
        }, delay);
    })

    return promise;
}

async function doTask1(callback) {
    console.log(`Task 1 started`);
    for (let number of generateRandomNumbers()) {
        await callback
        console.log(number);
    }
};

async function doTask2(callback) {
    console.log(`Task 2 started`);
    for (let number of generateRandomNumbers()) {
        await callback
        console.log(number);
    }
};

async function doTask3(callback) {
    console.log(`Task 3 started`);
    for (let number of generateRandomNumbers()) {
        await callback
        console.log(number);
    }
};

async function handleTasks() {
    try {
        await doTask1(asyncTask(5000));
        await doTask2(asyncTask(3000));
        await doTask3(asyncTask(1000));
    }
    catch (error) {
        throw new Error(error);
    }
}

handleTasks();
