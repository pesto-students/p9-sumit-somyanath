const threeSum = (arr, N) => {
    arr.sort((a, b) => a - b);

    let closestSum = 1000000000;

    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        let k = arr.length - 1;
        let sum = 0;

        while (j < k) {
            sum = arr[i] + arr[j] + arr[k];

            if (Math.abs(N - sum) < Math.abs(N - closestSum)) {
                closestSum = sum;
            }

            if (sum > N) {
                k--;
            }

            else {
                j++;
            }
        }
    }

    return closestSum;
};

let result = threeSum([-1,2,1,4], 1);
console.log(result);
/*
Time Complexity: O(n^2)
Space Complexity: O(1)
*/