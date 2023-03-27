const findPairWithGivenDiff = (arr, N) => {
    let hashTable = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (hashTable.has(arr[i])) {
            hashTable.set(arr[i], hashTable.get(arr[i]) + 1);
        }
        else {
            hashTable.set(arr[i], 1);
        }

        /* this case is possible when N is 0 */
        if (N === 0 && hashTable.get(arr[i]) > 1) {
            return 1;
        }
    }

    if (N === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (hashTable.has(N + arr[i])) {
            return 1;
        }
    }

    return 0;
};

const result = findPairWithGivenDiff([-10, 20], 30);
console.log(result);
/*
Time Complexity: O(n)
Space Complexity: O(n)
*/