function bestSum(target, numbers, memo = {}) {
  if(target === 0) return [];
  if(target < 0) return null;
  if(memo[target] !== undefined) return memo[target]

  let shortestCombination = null;

  for(let i=0; i < numbers.length; i++) {
    const num = numbers[i]
    const remainder = target - num
    const remainderResult = bestSum(remainder, numbers, memo)

    if(remainderResult !== null) {
      const combination = [...remainderResult, num]

      if(shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
    }
  }

  memo[target] = shortestCombination

  return memo[target]


















}




console.log(bestSum(100, [1,5]))





/*
function bestSum(target, numbers, memo = {}) {
  if(memo[target]) return memo[target];
  if(target === 0) return [];
  if(target < 0) return null;
  
  let shortestCombination = null;
  
  // fan out branches for each number in array
  for(let i = 0; i < numbers.length; i++) {
    let num = numbers[i]
    
    const remainder = target - num;
    console.log('target: ', target)
    console.log('num: ', num)
    console.log('remainder: ', remainder)
    // recursive call, follows down a branch
    const remainderCombination = bestSum(remainder, numbers, memo)

    if(remainderCombination !== null) {
      const combination = [...remainderCombination, num]
      console.log('short in loop: ', shortestCombination)
      console.log('combination: ', combination)

      if(shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
        
    }
  }
  console.log('shortestCombination: ', shortestCombination)


  memo[target] = shortestCombination;
  return shortestCombination;   
}

function init() {
  console.log(bestSum(8, [2,5,3]))
}

module.exports = { init }
*/