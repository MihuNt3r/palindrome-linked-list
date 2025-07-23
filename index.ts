class ListNode {
    val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}

function buildLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function outputLinkedList(head: ListNode | null): void {
    const values: number[] = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    console.log(values.join(" -> "));
}

function isPalindrome(head: ListNode | null): boolean {
    const stack: number[] = [];
    let current = head;

    while (current !== null) {
        stack.push(current.val);
        current = current.next;
    }

    current = head;

    while (current !== null) {
        const top = stack.pop();
        if (top !== current.val) {
            return false;
        }

        current = current.next;
    }

    return true;
}

const palindrome1 = buildLinkedList([1, 2, 3, 2, 1]);
const palindrome2 = buildLinkedList([7, 8, 8, 7]);
const palindrome3 = buildLinkedList([9]);
const nonPalindrome1 = buildLinkedList([1, 2, 3, 4, 5]);
const nonPalindrome2 = buildLinkedList([1, 2]);
const nonPalindrome3 = buildLinkedList([5, 6, 7]);

let linkedLists = [palindrome1, palindrome2, palindrome3, nonPalindrome1, nonPalindrome2, nonPalindrome3];

/*
1 -> 2 -> 3 -> 2 -> 1
true
7 -> 8 -> 8 -> 7
true
9
true
1 -> 2 -> 3 -> 4 -> 5
false
1 -> 2
false
5 -> 6 -> 7
false
 */
linkedLists.forEach(linkedList => {
    outputLinkedList(linkedList);
    let isListPalindrome = isPalindrome(linkedList);
    console.log(`${isListPalindrome}`);
})