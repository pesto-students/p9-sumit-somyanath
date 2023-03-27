const bestTimeToBuyStock = (stocks) => {
    let leastCostPrice = stocks[0];
    let maximumProfit = 0;
    let profit = 0;

    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i] < leastCostPrice) {
            leastCostPrice = stocks[i];
        }

        profit = stocks[i] - leastCostPrice;

        if (maximumProfit < profit) {
            maximumProfit = profit;
        }
    }

    return {
        leastCostPrice,
        maximumProfit
    }
};

const result = bestTimeToBuyStock([7,6,4,3,1]);
console.log(result);
/*
Time Complexity: O(N)
Space Complexity: O(1)
*/