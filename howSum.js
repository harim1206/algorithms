// howSum(target, [numbers])
// howSum(7, [5, 3, 4, 7]) === true
// howSum(7, [5, 3, 2]) === false

/*
m = target
n = numbers.length

Time Complexity = O(n^m * m)
n branches
at worst m recursive calls (height of the tree), if m = 50 and each step reduced by 1

memo[target] = [...howSum(remainder, numbers, memo), num]
this line copies over an array, at worst length m

therefore

Brute Force
n^m recursive calls * array copy operation m = n^m * m without memoization

Memoization
O(m * m)


*/

//Tabulation Method
function howSum(target, numbers) {
  let table = Array(target + 1).fill(null)
  table[0] = []

  for(let i=0; i <= target; i++) {
    if(table[i]) {
      for(let num of numbers) {

        if(i + num <= target) table[i + num] = [...table[i], num]

        console.log('table: ', table)
      }
    }
  }

  return table[target]

}
console.log(howSum(7, [5, 3, 2]))
// console.log(howSum(98, [14, 7]))


// function howSum(target, numbers, memo = {}) {
//   // if(memo[target] !== undefined) return memo[target]
//   if(target in memo) return memo[target]
//   if(target === 0) return [];
//   if(target < 0) return null;
  
//   for(let i=0; i < numbers.length; i++) {
//     const num = numbers[i]
//     const remainder = target - num
//     const remainderResult = howSum(remainder, numbers, memo)
//     // console.log('remainder: ', remainder)
//     // console.log('remainderResult: ', remainderResult)

//     if(remainderResult !== null) {
//       memo[target] = [...remainderResult, num]
//       return memo[target]
      
//     }    
//   }

//   memo[target] = null
//   return null;
  

// }

// console.log(howSum(500, [7, 15, 10]))