// //Tabulation Method
function allSum(target, numbers) {
  // let table = Array(target + 1).fill(null)
  const table = Array(target + 1)
    .fill()
    .map(()=> [])
  table[0] = [[]]

  for(let i=0; i <= target; i++) {
    if(table[i]) {
      for(let num of numbers) {
        const newComb = table[i].map( arr => [...arr, num])
        if(table[i + num] !== undefined)table[i + num].push(...newComb)
      }
    }
  }

  return table[target]

}

console.log(allSum(7, [5, 3, 2]))

// function allSum(target, numbers, memo = {}) {
//   if(memo[target]) return memo[target];
//   if(target === 0) return [];
//   if(target < 0) return null;
  
//   let combArr = [];
  
//   // fan out branches for each number in array
//   for(let i = 0; i < numbers.length; i++) {
//     let num = numbers[i]
    
//     const remainder = target - num;
//     // recursive call, follows down a branch
//     const remainderCombination = allSum(remainder, numbers, memo)

//     if(remainderCombination !== null) {
//       const combination = [...remainderCombination, num]

//       if(!combArr || combination.length < combArr.length) {
//         combArr = combination
//       }
        
//     }
//   }
//   console.log('combArr: ', combArr)


//   memo[target] = combArr;
//   return combArr;   
// }


// console.log(allSum(8, [2,5,3]))
