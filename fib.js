// return the fibonacci sequence of n
// fib(n) = fib(n-1) + fib(n-2)

// Tabulation Version
function fib(n) {
  // create a table of size n
  // fill it with 0's
  let table = Array(n + 1).fill(0)
  table[1] = 1

  for(let i=0; i <= n; i++) {
    table[i + 1] += table[i]
    table[i + 2] += table[i]
  }

  return table[n]
}

// Memoization Version
// function fib(n, memo = {}) {
//   // 1 1 2 3

//   if(n < 2) return 1
//   if(memo[n]) return memo[n]

//   memo[n] = fib(n-1, memo) + fib(n-2, memo)
//   return memo[n]


// }

console.log(fib(15))
console.log(fib(115))