function createStack () {
    let items = [];
    console.log("inside items:" + items);
    return  {
        push: function (item) {
            items.push(item);
        },
        pop: function () {
            return items.pop();
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items);
stack.items = [10, 100, 1000];