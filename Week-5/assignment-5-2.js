class CustomMap {
    constructor() {
        this.object = {};
    }

    [Symbol.iterator]() {
        let count = 0;
        return {
            next: () => {
                let iteratorResult = count < Reflect.ownKeys(this.object).length ? { value: this.object[count], done: false } : { value: undefined, done: true };
                count++;
                return iteratorResult;
            }
        }
    }

    set (key, value) {
        Reflect.set(this.object, key, value);
    }

    get (key) {
        return Reflect.get(this.object, key);
    }

    has (key) {
        return Reflect.has(this.object, key);
    }
}
  

function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(str) {
    const vowelMap = new CustomMap();
    
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase();

        if (isVowel(lowerCaseChar)) {
            if(vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            }
            else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }

    return vowelMap;
}

const result = vowelCount("hello world");
console.log(result);