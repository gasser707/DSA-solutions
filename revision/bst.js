class node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class bst {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new node(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let helper = (root) => {
            if (val === root.val) return;
            if (val > root.val) {
                if (!root.right) {
                    root.right = newNode;
                    return;
                }
                helper(root.right);
            } else {
                if (!root.left) {
                    root.left = newNode;
                    return;
                }
                helper(root.left);
            }

        };

        helper(this.root);
    }

    find(val) {
        if (!this.root) return;

        let helper = (root) => {
            if (root.val === val) return true;
            if (val > root.val) {
                if (!root.left) return false;
                return helper(root.left);
            } else {
                if (!root.right) return false;
                return helper(root.right);
            }
        };

        return helper(this.root);
    }

    bfs() {
        let queue = [this.root];
        let arr = [];

        let helper = () => {
            if (queue.length === 0) return;
            let current = queue.shift();
            arr.push(current.val);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            return helper();
        };

        helper();
        console.log(arr);
    }
    dfs_pre() {
        let arr = [];
        let helper = (root) => {
            arr.push(root.val);
            if (root.left) helper(root.left);
            if (root.right) helper(root.right);
        };
        helper(this.root);
        console.log(arr);
    }

    dfs_in() {
        let arr = [];
        let helper = (root) => {
            if (root.left) helper(root.left);
            arr.push(root.val);
            if (root.right) helper(root.right);

      
        };
        helper(this.root);
        console.log(arr);
    }

    dfs_post() {
        let arr = [];
        let helper = (root) => {
            if (root.left) helper(root.left);
            if (root.right) helper(root.right);
            arr.push(root.val);
        };
        helper(this.root);
        console.log(arr);
    }

}

newBst = new bst();

newBst.insert(10);
newBst.insert(15);
newBst.insert(6);
newBst.insert(20);
newBst.insert(8);
newBst.insert(3);
newBst.bfs();
newBst.dfs_pre();
newBst.dfs_post();
newBst.dfs_in();
