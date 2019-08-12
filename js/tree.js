function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function ProtoTree() {}

ProtoTree.prototype.init = function (array) {};

ProtoTree.prototype.push = function (el) {};

ProtoTree.prototype.get = function (val) {};

ProtoTree.prototype.set = function (val, btree) {};

ProtoTree.prototype.getSize = function () {};

ProtoTree.prototype.toArray = function () {};

ProtoTree.prototype.remove = function (val) {};

ProtoTree.prototype.toString = function () {};

ProtoTree.prototype.getBalance = function () {};

function BinaryTree () {
    this._root = null;
    this._size = null;
}

BinaryTree.prototype = Object.create(ProtoTree.prototype);
BinaryTree.prototype.constructor = BinaryTree;

//----------getSise-----------------

BinaryTree.prototype.getSize = function () {
    return this._size;
}

//----------init-----------------

BinaryTree.prototype.init = function (arr) {

    if (arr === null || arr === undefined || arr.length === 0) {
        return this._root;
    }

    let start = 0;
    let end = arr.length - 1;

    const createTree = (arr, start, end) => {

        if (end < start) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const node = new Node(arr[mid]);

        node.left = createTree(arr, start, mid - 1);
        node.right = createTree(arr, mid + 1, end);

        this._size++;

        return node;
    }

    this._root = createTree(arr, start, end);

    console.log('this._root1 = ', this._root);

    return this._size;
}

// let tree = new BinaryTree();
//
// console.log('size = ', tree.init([-3, -2, -1, 5, 19, 25, 29, 31, 35]));
// console.log('===', tree);

//------------to array---------------------

BinaryTree.prototype.toArray = function () {

    if(this._root) {
        return tempArray(this._root);
    } else {
        return [];
    }

    function tempArray(tempNode) {
        let array = [];

        if (tempNode) {
            array = array.concat(tempArray(tempNode.left));
            array.push(tempNode.value);
            array = array.concat(tempArray(tempNode.right));
        }

        return array;
    };
};

// let tree = new BinaryTree();
// tree.init([-3, -2, -1, 5, 35]);
// console.log('toArray = ', tree.toArray());



//------------push-----------------------

BinaryTree.prototype.push = function (val) {
    if(!val) return;

    if (this._root === null) {
        this._root = new Node(val);
        this._size++;

        return this._size;
    } else {
        let tempNode = this._root;
        let pushNode = new Node(val);

        while(tempNode) {
            if(val < tempNode.value) { //  идем в левую ветку
                if(tempNode.left) {
                    tempNode = tempNode.left;  // пока существует левый узел, идем по ним
                } else {
                    tempNode.left = pushNode;
                    this._size++;

                    return this._size;
                }
            } else if(val > tempNode.value) { //  идем в правую ветку
                if(tempNode.right) {
                    tempNode = tempNode.right;  // пока существует правый узел, идем по ним
                } else {
                    tempNode.right = pushNode;
                    this._size++;

                    return this._size;
                }
            } else {                    // если значения равны
                let child = tempNode.left;
                tempNode.left = pushNode;
                pushNode.left = child;
                this._size++;

                return this._size;
            }
        }
    }
    // console.log('this._root = ', this._root);
}

//------------get-------------------------

BinaryTree.prototype.get = function (val) {
    if(!val) return;

    if (this._root === null) {
        return;
    } else {
        let tempNode = this._root;

        while(tempNode) {
            if(val < tempNode.value) { // идем влево
                tempNode = tempNode.left;
            } else if (val > tempNode.value) { // идем вправо
                tempNode = tempNode.right;
            } else {    //значения совпадают
                return true;
            }
        }
        return false;
    }
}

//--------------set-------------------------

BinaryTree.prototype.set = function (val, btree) {
    if (!val) return;

    let tempNode = btree._root;

    if (btree === null || tempNode === null) {
        btree = new Node(val);
        this._size++;
        return this._size;
    } else if (btree) {

        while (val != null) {
            if (val > tempNode.value) {
                if (tempNode.right != null) {
                    tempNode = tempNode.right;
                } else {
                    let node = new Node(val);
                    tempNode.right = node;
                    this._size++;

                    return this._size;
                }
            } else if (val < tempNode.value) {
                if (tempNode.left != null) {
                    tempNode = tempNode.left;
                } else {
                    let node = new Node(val);
                    tempNode.left = node;
                    this._size++;

                    return this._size;
                }
            }
        }
    }
}

let tree2 = new BinaryTree();
tree2.init([]);
console.log('toArray1 = ', tree2.toArray());
tree2.set(-2, tree2);
console.log('toArray1 = ', tree2.toArray());

//-------------remove------------------------

BinaryTree.prototype.remove = function (val) {
    if(!val) return;

    if (this._root === null || !this.get(val)) {
        return;
    } else {
        let tempNode = this._root;
        let parentL;
        let parentR;

        while(tempNode) {
            if (val < tempNode.value) { // идем влево
                parentL = tempNode;
                tempNode = tempNode.left;
            } else if (val > tempNode.value) { // идем вправо
                parentR = tempNode;
                tempNode = tempNode.right;
            } else {    //значения совпадают
                if(tempNode.left == null && tempNode.right == null) {
                    if(parentL) {parentL.left = null;}
                        else if (parentR) {parentR.right = null;}
                        this._size--;
                        // console.log('temp1=', tempNode);
                        return this._size;
                } else if (tempNode.left == null && tempNode.right) {
                    if(parentL) {    // [-1, 0,1,5,19,25,29,31] el=-1
                        parentL.left = tempNode.right;
                    }
                        else if (parentR) {parentR.right = tempNode.right;} //
                        this._size--;
                    // console.log('temp2=', tempNode);
                    return this._size;
                } else if (tempNode.right == null && tempNode.left) {
                    if(parentL) {parentL.left = tempNode.left;}
                    else if (parentR) {parentR.right = tempNode.left;}
                    this._size--;
                    // console.log('temp3=', tempNode);
                    return this._size;
                } else if (tempNode.right && tempNode.left) {
                    if(parentL) {
                        let current = tempNode.left;
                        current.right = tempNode.right;
                        parentL.left = current;
                    }
                    else if (parentR) {
                        let current = tempNode.right;
                        current.left = tempNode.left;
                        parentR.right = current;
                    }
                    this._size--;
                    // console.log('temp3=', this._root);
                    return this._size;
                }
                // console.log('temp4=', tempNode);
                // console.log('this._root3 = ', this._root);
                return this._size;
            }
        }
    }
}

// let tree = new BinaryTree();
// tree.init([-3, -2, -1, 5, 19, 25, 29, 31, 35]);
// console.log('toArray1 = ', tree.toArray());
// console.log('result = ', tree.remove(-3));
// console.log('toArray2 = ', tree.toArray());

// console.log('init = ', tree1.init([0, 5, 7, 10, 11, 15, 19, 25, 29]));
// console.log('root1', this._root);
//
// console.log('result = ', tree1.remove(25));
//
// console.log('this._root2 = ', this._root);
