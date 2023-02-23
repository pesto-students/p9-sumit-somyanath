const PROMISE_STATES = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

function MyPromise (executor) {
  let status = PROMISE_STATES.PENDING,
      // isResolved = false,
      value;

  function resolve (passedValue) {
    value = passedValue;
    status = PROMISE_STATES.FULFILLED
  }

  this.then = function (callback) {
    if (status === PROMISE_STATES.FULFILLED) {
      callback(value);
    }
  }

  try {
    executor(resolve);
  } catch (error) {
    new Error(error);
  }
};

function getNumber(delay) {
  return new MyPromise((resolve) => {
    const randonNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randonNumber);
  
    // setTimeout(() => {
      // if(randonNumber % 5 === 0) {
        // reject(`Number ${randonNumber} Promise rejected after ${delay} miliseconds`);
      // }
      // else {
        resolve(`Number ${randonNumber} Promise resolved after ${delay} miliseconds`)
      // }
    // }, 1000)
  })
};

getNumber(1000)
  .then((response) => {
    console.log(`then block ${response}`);
    // return response;
  })