// Sliding window

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  console.log("==== hello ====");
  if (str1.length !== str2.length) return false;

  const obj = {};

  for (const ch of str1) {
    obj[ch] = obj[ch] ? ++obj[ch] : 1;
  }

  for (const ch of str2) {
    if (obj[ch]) {
      --obj[ch];
      if (obj[ch] === 0) delete obj[ch];
    } else {
      return false;
    }
  }

  if (Object.keys(obj).length !== 0) return false;

  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

// ====================================================================================

// Colt's solution:
function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram2('anagrams', 'nagaramm'));
console.log(validAnagram2('anagramm', 'nagarams'));
