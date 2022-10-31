/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /*
  iterative, recursive
  
    let prevNode = null,
      currentNode = head;
  
    while (currentNode) {
      let temp = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = temp;
    }
  
    return prevNode;
  */

  // base case
  if (head == null || head.next == null) {
    return head;
  }
  // go all the way to the end
  let reversedListHead = reverseList(head.next);
  // add reverse myself
  head.next.next = head;
  head.next = null;
  // go up
  return reversedListHead;
};
