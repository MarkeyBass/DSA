// Dynamic Programming - Coin Change
// Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

// Examples:

const denominations = [1, 5, 10, 25];

// coinChange(denominations, 1); // 1
// coinChange(denominations, 2); // 1
// coinChange(denominations, 5); // 2
// coinChange(denominations, 10); // 4
// coinChange(denominations, 25); // 13
// coinChange(denominations, 45); // 39
// coinChange(denominations, 100); // 242
// coinChange(denominations, 145); // 622
// coinChange(denominations, 1451); // 425663
// coinChange(denominations, 14511); // 409222339


coinChange(denominations, 6); // 2

function coinChange(coins, amount) {
  const ways = new Array(amount + 1).fill(0);
  ways[0] = 1;
  // outer loop over single coin
  for (const coin of coins) {
    // For sums a from coin to amount, add ways to form a - coin (append this coin).
    for (let a = coin; a <= amount; a++) {
      ways[a] += ways[a - coin];
    }
    console.log(ways)
  }
  console.log(ways[amount]);
  return ways[amount];
}

