function numberCompare(num1, num2) {
  return num1 - num2;
}
const x = [6, 4, 15, 10].sort(numberCompare);
// [ 4, 6, 10, 15 ]

console.log(x)


function strLengthSort(str1, str2) {
  return str1.length - str2.length;
}
const y = ["abc", "a", "oiuoiu", "sc"].sort(strLengthSort);

console.log(y)