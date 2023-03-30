const nextGreaterInArray = (arr) => {
    let map = [];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        while (map.length !== 0 && map[map.length - 1]["value"] < arr[i]) {
            let d = map.pop();
            result[d["index"]] = arr[i];
        }

        map.push({ "value": arr[i], "index": i  });
    }

    while (map.length > 0) {
        let d = map.pop();
        result[d["index"]] = -1;
    }

    return result;
};

console.log(nextGreaterInArray([1,3,2,4]));
console.log(nextGreaterInArray([6,8,0,1,3]));

/*
TC: O(N);
SC: O(N);
*/