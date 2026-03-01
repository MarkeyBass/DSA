// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
  const arr = [];

  function inner(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        arr.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        inner(obj[key]);
      }
    }
  }
  inner(obj);

  return arr;
}

// function collectStrings(obj, arr=[]) {
//   for(let key in obj) {
//     if(typeof obj[key] === 'string') {
//       arr.push(obj[key])
//     }
//     if(typeof obj[key] === 'object') {
//       return arr.concat(collectStrings(obj[key]))
//     }
//   }

//   return arr
// }

const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
          arr: ["aa", "bb", "cc"],
        },
      },
    },
  },
};
console.log(collectStrings(obj1)); // ["foo", "bar", "baz"])
