class CustomSet {
    constructor(iterable) {
        this.items = {};
        this.size = 0;

        if (iterable !== null && iterable !== undefined) {
            for (let item of iterable) {
                this.add(item);
            }
        }
    }

    add (value) {
        if (!this.has(value)) {
            this.items[value] = true;
            this.size++;
        }

        return this;
    }

    has (value) {
        return this.items.hasOwnProperty(value);
    }

    delete (value) {
        if (this.has(value)) {
            delete this.item[value];
            this.size--;
            return true;
        }
        else {
            return false;
        }
    }

    clear () {
        this.item = {};
        this.size = 0;
    }
}

const hasDuplicate = arr => {
    return new CustomSet([1,5,1,4]).size !== arr.length
}
console.log(hasDuplicate([1,5,-1,4]))// false