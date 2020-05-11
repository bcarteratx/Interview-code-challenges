/*--------------------------

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.

--------------------*/

// function isSudokuValid(board){
//   let temp = 0;
//   for(x = 0; x < 9; x ++){
//       for(y = 0; y < 9; y++){
//           if(0 <= board[x][y] < 9){
//               temp = x+1;
//               while(temp < 9){
//                   if((board[x][y] == board[temp][y]) && !isNaN(board[x][y])){
//                       console.log(board[x][y])   
//                       return false;
//                   }
//                    temp ++;
//               }
//               temp = y+1;
//               while(temp < 9){
//                   if((board[x][y] == board[x][temp]) && !isNaN(board[x][y])){
//                       console.log(board[x][y])
//                       return false;
//                   }
//                   temp ++;
//               }
//           }
//       }
//   }
//   for(i = 1; i < 8; i+= 3){
//       for(j = 1; j < 8; j+= 3){
//            let tempSet = new Set();
//           for(x = i-1; x < i+2; x++){
//               for(y = j-1; y< j+2; y++){
//                   if(tempSet.has(board[x][y])){
//                       console.log(board[x][y])
//                       return false;
//                   }else{
//                       tempSet.add(board[x][y])
//                       if(board[x][y] ==="."){
//                           tempSet.delete(".")
//                       }
//                   }
//               }
//           }
//       }
//   }
//   return true;
// }

// let board = [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]

// isSudokuValid()


/*----------------------------------
Given an integer array arr and an integer k, modify the array by repeating it k times.

For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2].

Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be 0 and its sum in that case is 0.

As the answer can be very large, return the answer modulo 10^9 + 7.

 
Example 1:

Input: arr = [1,2], k = 3
Output: 9
Example 2:

Input: arr = [1,-2,1], k = 5
Output: 2
Example 3:

Input: arr = [-1,-2], k = 7
Output: 0
 

Constraints:

1 <= arr.length <= 10^5
1 <= k <= 10^5
-10^4 <= arr[i] <= 10^4
----------------------------------*/

function kConcatMaxSum(arr, k) {
  let max = 0;
  let count = 0;
  let maxArr = [];
  while(count < k) {
    maxArr = maxArr.concat(arr);
    count++;
  }
// console.log(maxArr)
for (let i=0; i<maxArr.length; i++) {
  sum += maxArr[1];
  if
  }
}
return max;
}

console.log(kConcatMaxSum([2, 3], 1))
