class HashTable {
  constructor(size = 51) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // set
  // 1. Accepts a key and a value
  // 2. Hashes the key
  // 3. Stores the key-value pair in the hash table
  //    array via separate chaining

  set(key, value) {
    const index = this._hash(key);
    const bucket = this.keyMap[index];
    if (!bucket) {
      this.keyMap[index] = [[key, value]];
    } else {
      let found = false;
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          found = true;
          break;
        }
      }
      if (!found) bucket.push([key, value]);
    }
    console.log(this.keyMap);
    return this;
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.keyMap[index];
    if (bucket) {
      for (let element of bucket) {
        if (element[0] === key) return element[1];
      }
    }
    return undefined;
  }
}

function main() {
  const ht = new HashTable();
  ht.set("hello", "world");
  ht.set("pizza", "yum");
  ht.set("hello", "world");
  console.log(ht.get("hello"));
  console.log(ht.get("hello2"));
}

main();
