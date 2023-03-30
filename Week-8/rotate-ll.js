class Node {
    constructor (value, nextNode = null) {
        this.data = value;
        this.next = nextNode;
    }
};

const printLL = (node) => {
    const result = [];
    while (node !== null) {
        result.push(node.data);
        node = node.next;
    }

    console.log(`HEAD --> ${result.join(' --> ')} --> NULL`);
};

let nodeE = new Node(9);
let nodeD = new Node(8, nodeE);
let nodeC = new Node(7, nodeD);
let nodeB = new Node(4, nodeC);
let nodeA = new Node(2, nodeB);

printLL(nodeA);

const rotateLL = (headNode, rotations) => {
    if (k == 0) {
        return headNode;
    }

    let count = 0;
    let k = null;
    let current = headNode;

    while (count < rotations - 1 && current !== null) {
        current = current.next;
        count++;
    }

    if (current == null) {
        return headNode;
    }

    k = current.next;
    while (k.next !== null) {
        k = k.next;
    }

    k.next = headNode;
    headNode = current.next;
    current.next = null;

    return headNode;
};

printLL(rotateLL(nodeA, 3));

/*
TC: O(N);
SC: O(1);
*/