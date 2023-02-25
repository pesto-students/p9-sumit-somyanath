const PROMISE_STATES = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

function MyPromise (executor) {
  let status = PROMISE_STATES.PENDING,
      thenChain = [],
      catchChain = [],
      resolvedValue,
      rejectedValue;

  function resolve (passedValue) {
    resolvedValue = passedValue;
    status = PROMISE_STATES.FULFILLED;

    if (thenChain.length) {
      thenChain.reduce((accumulator, handleFunction) => handleFunction(accumulator), resolvedValue);
    }
  };

  function reject (error) {
    rejectedValue = error;
    status = PROMISE_STATES.REJECTED;

    if (catchChain.length) {
      catchChain.reduce((accumulator, catchFunction) => catchFunction(accumulator), rejectedValue);
    }
  };

  this.then = function (callback) {
    thenChain.push(callback.bind(this));

    if (status === PROMISE_STATES.FULFILLED) {
      resolvedValue = thenChain.reduce((accumulator, handleFunction) => handleFunction(accumulator), resolvedValue);
      thenChain.shift();
    }

    return this;
  }

  this.catch = function (callback) {
    catchChain.push(callback.bind(this));

    if (status === PROMISE_STATES.REJECTED) {
      rejectedValue = catchChain.reduce((accumulator, catchFunction) => catchFunction(accumulator), rejectedValue);
      catchChain = [];
    }

    return this;
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    throw new Error(error);
  }
};

function getNumber(delay) {
  return new MyPromise((resolve, reject) => {
    const randonNumber = Math.floor(Math.random() * 100) + 1;
  
    setTimeout(() => {
      if(randonNumber % 5 === 0) {
        reject(`Number ${randonNumber} Promise rejected after ${delay} miliseconds`);
      }
      else {
        resolve(`Number ${randonNumber} Promise resolved after ${delay} miliseconds`)
      }
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
  .catch((error) => {
    console.log(`Error is here: ${error}`);
    return error;
  })
  .catch((error) => {
    console.log(`next catch ${error}`);
  })
  // .then((response) => {
  //   console.log(`stupidity ${response}`);
  // })