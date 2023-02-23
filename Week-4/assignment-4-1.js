function MyPromise (executor) {
  let onResolve, onReject;

  function resolve (value) {
    onResolve(value);
  }

  function reject (error) {
    onReject(error)
  }

  this.then = function (callback) {
    onResolve = callback;
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
   };

  executor(resolve, reject);
};

const delayOneSec = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000)
});

delayOneSec
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })