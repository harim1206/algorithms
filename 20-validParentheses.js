/**
 * @param {string} s
 * @return {boolean}
 * 
 * Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */


 var isValid = function(s) {
  /*
    1. iterate through the string. If the character is an open paran, add it to the stack.
    2. If the charac is a close paran, peek at the stack. if the peek is the matching open, remove the peek from the stack.
    3. returns true if the string has been iterated, and the stack is empty
  */

  const map = {
    "}" : "{",
    ")" : "(",
    "]" : "["
  }

  const arr = s.split("")
  const stack = []

  for(let i = 0; i < s.length; i++) {
    const char = arr[i]
    

    // if the current character is a closing paran, check if stack peek is an open
    if ( map[char] ) {
      if(stack && stack[stack.length-1] === map[char]) {
        stack.pop()
      } else {
        return false
      }
    } else {
    // if the current character is an open paran, push into the stack
      stack.push(char)
    }
    
    console.log('stack: ', stack)
  }


  if(stack.length === 0) return true
  return false
    
};


console.log(isValid('()[][()]'))
