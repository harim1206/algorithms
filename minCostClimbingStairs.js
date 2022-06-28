//Memoization
function minCostClimbingStairs(cost) {
  // [25,5,10,15,20]

  function minCost(i, memo = {}){
    if(memo[i]) return memo[i]
    if(i <= 1) return 0;
    
    memo[i] =  Math.min(
      cost[i-1] + minCost(i-1, memo),
      cost[i-2] + minCost(i-2, memo)
    )

    return memo[i]
  }

  return minCost(cost.length)
}

// Tabulation
// function minCostClimbingStairs(cost) {
//   cost.push(0)
//   let table = new Array(cost.length).fill(0)
//   table[table.length-2] = cost[cost.length-2]
//   table[table.length-3] = cost[cost.length-3]
  
  
//   for(let i = table.length - 3; i >= 0; i--) {
//     table[i] = Math.min(cost[i] + table[i+1], cost[i] + table[i+2])
//   }

//   return Math.min(table[0],table[1])
// }

console.log(minCostClimbingStairs([25,5,10,15,20]))