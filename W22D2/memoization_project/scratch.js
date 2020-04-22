function minChange(coins, amount, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  let count = 0;

  for (let i = coins.length - 1; i >= 0; i--) {
    if (amount % coins[i] === 0) {
      count++;
      count += minChange(coins, amount - coins[i], memo);
      memo[amount] = count;
      return count;
    }
  }
  for (let i = coins.length - 1; i >= 0; i--) {
    if (amount > coins[i]) {
      count++;
      amount -= count;
    }
  }

  memo[amount] = count;
  return count;
}

console.log(minChange([1, 2, 5], 11)); // => 3, because 5 + 5 + 1 = 11
console.log(minChange([1, 4, 5], 8)); // => 2, because 4 + 4 = 8
console.log(minChange([1, 5, 10, 25], 15)); // => 2, because 10 + 5 = 15
console.log(minChange([1, 5, 10, 25], 100)); // => 4, because 25 + 25 + 25 + 25 = 100
