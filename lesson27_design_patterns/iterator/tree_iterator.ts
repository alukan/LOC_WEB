class TreeNode {
  name: string;
  children: TreeNode[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(child: TreeNode): void {
    this.children.push(child);
  }

  // Make the node iterable (pre-order traversal)
  [Symbol.iterator](): IterableIterator<TreeNode> {
    return new PreOrderTreeIterator(this);
  }
}

class PreOrderTreeIterator implements IterableIterator<TreeNode> {
  private root: TreeNode;
  nextTreeNodes: TreeNode[];

  constructor(root: TreeNode) {
    this.root = root;
    this.nextTreeNodes = [root];
  }

  [Symbol.iterator](): IterableIterator<TreeNode> {
    return this;
  }

  next(): IteratorResult<TreeNode> {
    // Go through children array, delete the first element.
    //  put children of that element into the children array
    // and return the element

    if (!this.nextTreeNodes.length) {
      return { done: true, value: undefined };
    }

    const element: TreeNode = this.nextTreeNodes[0];
    this.nextTreeNodes.shift();

    this.nextTreeNodes.push(...element.children);

    return { done: false, value: element };
  }
}

const root = new TreeNode("A");
const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");
const e = new TreeNode("E");

root.addChild(b);
root.addChild(c);
b.addChild(d);
b.addChild(e);

// for (const node of root) {
//   console.log(node.name);
// }
let done = false;
let iterator = root[Symbol.iterator]();
while (!done) {
  const result = iterator.next();
  if (result.done) {
    done = true;
  } else {
    console.log(result.value.name);
  }
}
