/*
  Floyd's Tortoise & Hare

  Slow & fast pointer. Slow pointer iterates by 1, fast pointer interates by 2.
  If there is a cycle, the distance for the fast pointer to catch up to the slow pointer is n (say, 8 nodes away)
  slow pointer will increase the gap by 1 & fast pointer will close the gap by 2 (8 - 2 + 1 = 8 - 1)
  at each iteration the gap will close by 1 => algo speed is O(n)

*/

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    if (slow === fast) {
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
