const PROMISE_STATES = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

function MyPromise (executor) {
  let status = PROMISE_STATES.PENDING,
      // isResolved = false,
      handlerChain = [],
      value;

  function resolve (passedValue) {
    value = passedValue;
    status = PROMISE_STATES.FULFILLED;

    if (handlerChain.length) {
      handlerChain.reduce((accumulator, handleFunction) => handleFunction(accumulator), value);
    }
  }

  this.then = function (callback) {
    handlerChain.push(callback.bind(this));

    if (status === PROMISE_STATES.FULFILLED) {
      handlerChain.reduce((accumulator, handleFunction) => handleFunction(accumulator), value);
    }

    return this;
  }

  try {
    executor(resolve);
  } catch (error) {
    throw new Error(error);
  }
};

function getNumber(delay) {
  return new MyPromise((resolve) => {
    const randonNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randonNumber);
  
    setTimeout(() => {
      // if(randonNumber % 5 === 0) {
        // reject(`Number ${randonNumber} Promise rejected after ${delay} miliseconds`);
      // }
      // else {
        resolve(`Number ${randonNumber} Promise resolved after ${delay} miliseconds`)
      // }
    }, 1000)
  })
};

getNumber(1000)
  .then((response) => {
    console.log(`then block ${response}`);
    return response;
  })
  .then((response) => {
    console.log(`inside the next then ${response}`);
  })