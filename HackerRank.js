//www.hackerrank.com/challenges/sparse-arrays/problem

function matchingStrings(strings, queries) {
  let matching = [];
  let val;
  let countString = strings.reduce(function(acc, str) {
    acc[str] = acc[str] ? acc[str] + 1 : 1
    return acc
  }, {})
  for (let i = 0; i < queries.length; i++){
    if(countString[queries[i]]){
      val = countString[queries[i]]
      matching.push(val)
    } else {
      matching.push(0)
    }
  }
     return matching
}
console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']))
console.log("^^^ should be [ 2, 1, 0]")