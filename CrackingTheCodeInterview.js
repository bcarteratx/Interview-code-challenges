// Contiguous Sequence: You are given an array of integers (both positive and negative). Find the
// contiguous sequence with the largest sum. Return the sum. 
// EXAMPLE
// Input:2, -8 , 3, -2, 4, -10
// Output: 5 (i.e. , {3 , -2, 4} )
// Hints: #53#551, #567, #594, #614

function findMaxSum(arr) {
  let max = 0;
  for (let i=0; i<arr.length; i++) {
    let start = 0;
    for (let j = i; j < arr.length; j++) {
      start += arr[j];
      max = Math.max(max, start);
    }
  }
  console.log(max);
  return max;
}

arr = [2, -8 , 3, -2, 4, -10]
findMaxSum(arr);


function getMaxSum(arr) {
  let maxsum = 0;
  let sum=0; 
  for (inti=0;i<arr.length;i++){
    sum += arr[i];
  if (maxsum < sum) {
    maxsum = sum;
    } else if (sum < 0) {
      sum = 0;
      }
  return maxsum;
  