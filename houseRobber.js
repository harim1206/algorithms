function rob(nums) {
  let table = new Array(nums.length).fill(0)
  table[0] = nums[0]
  table[1] = Math.max(nums[0], nums[1])

  for(let i = 2; i < nums.length; i++) {
    table[i] = Math.max(table[i-1], nums[i] + table[i-2])
  }
  console.log('table: ', table)

  return table[nums.length-1]
}
/* memoization
function rob(nums, memo = {}) {
 

  if( memo[nums] !== undefined ) return memo[nums]
  if( nums.length === 0 ) return 0;
  if( nums.length === 1 ) return nums[0]
  if( nums.length === 2 ) return Math.max(nums[0], nums[1])
  // console.log(nums[nums.length-1])

  memo[nums] = Math.max(
    rob(nums.slice(0, nums.length-1)), 
    nums[nums.length-1] + rob(nums.slice(0, nums.length-2))
  )

  return memo[nums]
  

}
*/



console.log(rob([2, 7, 9, 3, 1]))
console.log(rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]))
console.log(rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]))