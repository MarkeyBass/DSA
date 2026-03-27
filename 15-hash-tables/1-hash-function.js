function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  console.log(total)
  return total;
}


hash("pink", 13);
hash("pink", 13);
hash("yellow", 13);
hash("yellow", 13);
hash("yellowkj879879hdkjhkjhkjhkjsahdkjhkjdh", 13);
hash("yellowkjhdkjhkjhkjh879879kjsahdkjhkjdh", 13);

// console.log("a".charCodeAt(0) - 96);
// console.log("A".charCodeAt(0) - 96);
// console.log("b".charCodeAt(0) - 96);
// console.log("B".charCodeAt(0) - 96);
// console.log("z".charCodeAt(0) - 96);
// console.log("Z".charCodeAt(0) - 96);
