const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const sortZeroOneTwoArray = (arr) => {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] == 0) {
            swap(arr, low, mid);
            low++;
            mid++;
        }
        else if (arr[mid] == 1) {
            mid++;
        }
        else if (arr[mid] == 2) {
            swap(arr, mid, high);
            high--;
        }
    }
};

const result = (arr) => {
    sortZeroOneTwoArray(arr);

    console.log(arr);
};

let arr = [0,1,1,0,1,2,1,2,0,0,0,1];
result(arr);

/*
Time Complexity: O(N)
Space Complexity: O(1)
*/