// function subStringMatchCount(str, sub) {
//   let counter = 0;

//   for (let i = 0; i < str.length - 1; i++) {
//     console.log(`${i}: ${str[i]}`);
//     if (str[i] === sub[0]) {
//       counter++;
//       for (let j = 0; j < sub.length - 1; j++) {
//         if (str[i + j] !== sub[j]) {
//           counter--;
//           break;
//         }
//       }
//     }
//   }
//   console.log(counter);
//   return counter;
// }
// subStringMatchCount("wowomgzomg", "omg");


function subStringMatchCount(str, sub) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    console.log(`${i}: ${str[i]}`);
    if (str[i] === sub[0]) {
      for (let j = 0; j < sub.length; j++) {
        if (str[i + j] !== sub[j]) break;
        if (j === sub.length - 1) counter++
      }
    }
  }
  console.log(counter);
  return counter;
}
subStringMatchCount("wowomgzomgabodomgi", "omg");



// function naiveSearch(long, short){
//     var count = 0;
//     for(var i = 0; i < long.length; i++){
//         for(var j = 0; j < short.length; j++){
//            if(short[j] !== long[i+j]) break;
//            if(j === short.length - 1) count++;
//         }
//     }
//     return count;
// }

// naiveSearch("lorie loled", "lol")