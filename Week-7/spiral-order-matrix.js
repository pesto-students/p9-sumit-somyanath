/* Recursion Method */
function print (arr, sr, sc, er, ec) {
    if (sr >= er || sc >= ec) {
        return;
    }

    for (let i = sc; i < ec; i++) {
        result.push(arr[sr][i]);
    }
    
    for (let i = sr + 1; i < er - 1; i++) {
        result.push(arr[i][ec - 1]);
    }

    if (er - 1 !== sr) {
        for (let i = ec - 1; i >= sc; i--) {
            result.push(arr[er - 1][i]);
        }
    }

    if (ec - 1 !== sc) {
        for (let i = er - 2; i > sr; i--) {
            result.push(arr[i][sc]);
        }
    }

    print(arr, sr + 1, sc + 1, er - 1, ec - 1)
}


let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16],
];

const result = [];
print(arr, 0, 0, arr.length, arr[0].length);
console.log(result);

/*
Time Complexity: O(R*C)
Space Complexity: O(R*C)
*/


/* DFS Method */


// /*
// Time Complexity: O(R*C)
// Space Complexity: O(R*C)
// */