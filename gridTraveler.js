// Tabulation Version
function gridTraveler(m, n) {
  let table = new Array(m + 1)
  .fill()
  .map(() => Array(n + 1).fill(0))

  table[1][1] = 1

  for(let i = 0; i <= m; i++) {
    for(let j = 0; j <= n; j++) {
      const current = table[i][j]
      if(j+1<=n)table[i][j+1] += current
      if(i+1<=m)table[i+1][j] += current
    }
  }

  console.log('table: ', table)
  return table[m][n]

}

// Memoization Version
// function gridTraveler(m, n, memo = {}) {
//   const key = m + ',' + n
//   if(m === 1 && n === 1) return 1;
//   if(m < 1 || n < 1) return 0;
//   if(memo[key]) return memo[key]

  
//   memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo)
//   return memo[key]

// }


console.log(gridTraveler(5,10))