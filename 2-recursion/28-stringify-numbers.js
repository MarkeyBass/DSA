// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.

function stringifyNumbers(obj) {
  const newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object") {
      if (Array.isArray(obj[key])) {
        newObj[key] = obj[key].map((el) => {
          if (typeof el === "object") {
            return stringifyNumbers(el);
          }
          return el;
        });
      } else {
        newObj[key] = stringifyNumbers(obj[key]);
      }
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

var obj3 = {
  outer: 2,
  obj: {
    inner: 2,
    innerArr: [2, 3, 4],
    innerArrEmbedded: [{ a: 1, b: [1, 2] }],
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};


let obj4 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj1));
console.log(stringifyNumbers(obj2));
console.log(stringifyNumbers(obj3));
console.log(stringifyNumbers(obj3).obj.innerArrEmbedded);
console.log(stringifyNumbers(obj4));


