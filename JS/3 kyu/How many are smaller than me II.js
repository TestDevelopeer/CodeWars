function BSTNode(val) {
    this.dup   = 1;
    this.left  = null;
    this.right = null;
    this.val   = val;
    this.count = 0;
}

var insert = (root, num, result, sum, i) => {
    if (root === null) {
        result[i] = sum;
        return new BSTNode(num);
    }

    if (root.val === num) {
        root.dup++;
        result[i] = sum + root.count;
    } else if (root.val > num) {
        root.count++;
        root.left = insert(root.left, num, result, sum, i);
    } else {
        root.right = insert(root.right, num, result, sum + root.count + root.dup, i);
    }
    return root;
}

function smaller(arr) {
    var result = Array(arr.length).fill(0);
    var root   = null;
    for (var i = arr.length; i--;)
        root = insert(root, arr[i], result, 0, i);
    return result;
}