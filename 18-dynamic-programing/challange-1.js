// Coin Change - Greedy Algorithm
// Important note: In this coding exercise, we are using a greedy approach to the coin change problem, not Dynamic Programming. Please keep in mind that a greedy approach might not work well with all coin systems and denominations. If we need an approach that always yields the true minimum coin count for any set of denominations, we would use a Dynamic Programming approach, which we will implement in the next coding exercise called: "Dynamic Programming – Coin Change". In comparison to the greedy approach, that coding exercise focuses on a Dynamic Programming solution that systematically finds an optimal result for all coin sets.

// But first, let's try the Coin Change - Greedy Algorithm approach:

// Write a function minCoinChange that takes two arguments: an array of coin denominations (coins) and a target amount number (amount). The provided array of coins is sorted in ascending order, starting from the smallest coin denomination to the largest.

// Your task is to return an array representing the minimum number of coins needed to make the given amount. The result should be an array of the actual coins used, not their count or sum. To achieve this, you should start by considering the largest denominations first and use them as much as possible before moving to smaller denominations. As a consequence of this, the result array should be sorted in descending order, starting from the largest coin denomination to the smallest.

// Examples:

minCoinChange([1, 2, 3, 4, 5], 11); // this should return: [5, 5, 1]
minCoinChange([5, 10, 15, 20, 25], 85); // this should return: [25, 25, 25, 10]
minCoinChange([1, 5, 6, 9], 11); // this should return: [9, 1, 1]

function minCoinChange(coins, amount) {
  // write your code here
  const finalArr = [];
  let tempSum = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    if (tempSum === amount) break;
    while(amount >= tempSum + coins[i]) {
      finalArr.push(coins[i])
      tempSum+=coins[i]
    }
  }
  console.log(finalArr, tempSum)
  return finalArr
}
