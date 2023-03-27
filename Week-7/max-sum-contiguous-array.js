const findMaxSumContiguosSubArray = (arr) => {
    let max_so_far = 0;
    let max_end_here = 0;
    let start = 0;
    let end = 0;
    let s = 0;

    for (let i = 0; i < arr.length; i++) {
        max_end_here += arr[i];
        if (max_so_far < max_end_here) {
            max_so_far = max_end_here;
            start = s;
            end = i;
        }

        if (max_end_here < 0) {
            max_end_here = 0;
            s = i + 1;
        }
    }

    return {
        arrSum: max_so_far,
        arr: arr.slice(start, end + 1)
    }
}

console.log(findMaxSumContiguosSubArray([-2,1,-3,4,-1,2,1,-5,4]));
/*
Time Complexity: O(N)
Space Complexity: O(1)
*/