// For sorted

function checkSumSorted(arr, target = 8) {
  let left = 0;
  let right = arr.length - 1;

  let sum;
  while (arr[left] + arr[right] !== target && right > left + 1) {
    sum = arr[left] + arr[right];
    if (sum < target) left++;
    if (sum > target) right--;
  }

  if (arr[left] + arr[right] === 8) return [left, right];
  else return null;
}

// console.log(checkSumSorted([1, 2, 3, 9],8));
// console.log(checkSumSorted([1, 2, 4, 4],8));
// console.log(checkSumSorted([1, 2, 4, 5, 6],8));
// console.log(checkSumSorted([1, 2, 4, 8, 9], 8));

// For non sorted
function checkSumNonSorted(arr, target) {
  // // Main logic with Set
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(target - arr[i])) return true;
    set.add(arr[i]);
  }
  return false;
}

/*
 * Scaling beyond one machine / RAM (same problem, too large to hold in memory):
 *
 * The single-pass Set keeps either “seen values” or complements in RAM. If the
 * *distinct* values (or the stream) are too large, you don’t run this exact
 * loop on the whole dataset in one process unchanged.
 *
 * Ideas that do work in production:
 *
 * 1) MapReduce / shuffle join — Map: for each number x emit records keyed by x
 *    and by (target - x); Reduce (or a join phase): a pair exists when the same
 *    key connects two different inputs (or x appears twice when 2x === target).
 *    Workers only see shards of the input; the framework moves keys to the
 *    right reducer. (Same spirit as “repartition by key” in Spark/Flink.)
 *
 * 2) Stream chunks + shared or partitioned store — Process chunks in parallel,
 *    but “have we seen target - x?” must consult a distributed KV store / cache
 *    (or partition by hash(x) so both x and (target - x) land on the same
 *    partition for a local check). Design depends on skew and fault tolerance.
 *
 * 3) Disk-backed set / external memory — Same algorithm, but the Set is a
 *    database, memory-mapped store, or spill-to-disk structure so it fits on
 *    one box with slower I/O instead of fitting entirely in RAM.
 *
 * 4) Sort + merge (if you can sort externally) — Huge array → external sort,
 *    then the sorted two-pointer scan can run in streaming passes without
 *    holding the whole array in memory (Colt’s sorted variant, scaled up).
 *
 * You cannot simply split the array across machines and OR the local booleans:
 * a valid pair may sit in two different shards, so you need a join or shared
 * state as above.
 */

console.log(checkSumNonSorted([1, 2, 3, 9], 8)); // false
console.log(checkSumNonSorted([1, 2, 4, 4], 8)); // true
console.log(checkSumNonSorted([1, 2, 4, 5, 6], 8)); // true
console.log(checkSumNonSorted([1, 2, 4, 8, 9], 8)); // false
console.log(checkSumNonSorted([1, 2, 4, 5, 9], 8)); // false
