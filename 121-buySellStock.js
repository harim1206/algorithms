/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
   let l = 0, r = 0, max = 0, profit = 0;

   while(r < prices.length) {
     if(prices[l] < prices[r]) {
       profit = prices[r] - prices[l]
       max = Math.max(max, profit)
     } else {
       l = r
     }

    r++
   }

   return max
  
    
};

console.log(maxProfit([7,1,5,3,6,4]))