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

let nodeD = new Node(25);
let nodeC = new Node(20, nodeD);
let nodeB = new Node(10, nodeC);
let nodeA = new Node(5, nodeB);

printLL(nodeA);

const reverseLL = (node) => {
    let prevNode = null;
    let currentNode = node;
    let nextNode = null;

    while (currentNode !== null) {
        nextNode = currentNode.next
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    node = prevNode;

    return node;
};

printLL(reverseLL(nodeA));