// MULTIPLE POINTERS
// Creating pointers or values that correspond to an
// index or position and move towards the beginning,
// end or middle based on a certain condition
// Very efficient for solving problems
// with minimal space complexity as well

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,10])