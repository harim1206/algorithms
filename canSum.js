// canSum(target, [numbers])
// canSum(7, [5, 3, 4, 7]) === true
// canSum(7, [5, 3]) === false

//Tabulation Method
function canSum(target, numbers) {
  let table = Array(target + 1).fill(false)
  table[0] = true

  for(let i=0; i <= target; i++) {
    if(table[i]) {
      for(let num of numbers) {
        table[i + num] = true

        console.log('table: ', table)
      }
    }
  }

  return table[target]

}
// console.log(canSum(7, [5, 3, 2]))
console.log(canSum(98, [14, 7]))


//Memoization Method
// function canSum(target, numbers, memo = {}) {
//   if(memo[target]) return memo[target]
//   if(target === 0) return true;
//   if(target < 0) return false;  

//   for(let i=0; i < numbers.length; i++) {
//     const num = numbers[i]
//     const remainder = target - num

//     if(canSum(remainder, numbers, memo)) {
//       memo[target] = true
//       return true
//     }
//   }

//   memo[target] = false
//   return false

// }

// console.log(canSum(100, [14, 7]))