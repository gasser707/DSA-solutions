class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        let current = this.root;

        function helper(current, value) {
            if (value === current.val) {
                console.log("exist");
                return;
            }
            if (value > current.val) {
                if (!current.right) {
                    current.right = new Node(value);
                    return;
                }

                let right = current.right;

                helper(right, value);
            } else if (value < current.val) {
                if (!current.left) {
                    current.left = new Node(value);
                    return;
                }

                let left = current.left;
                helper(left, value);
            }
        }

        helper(current, value);

        // while (true) {
        // if(value===current.val){
        //     console.log("exist")
        //     return
        // }
        //     if (value > current.val) {
        //         if (!current.right) {
        //             current.right = new Node(value);
        //             break;
        //         }

        //         current = current.right;
        //         continue;
        //     } else if (value < current.val) {
        //         if (!current.left) {
        //             current.left = new Node(value);
        //             break;
        //         }

        //         current = current.left;
        //         continue;
        //     }
        // }
    }

    find(value) {
        if (!this.root) {
            return;
        }

        let current = this.root;

        function helper(current, value) {
            if (current.val === value) {
                return true;
            } else if (value > current.val) {
                if (!current.right) {
                    return false;
                }
                current = current.right;
                return helper(current, value);
            } else {
                if (!current.left) {
                    return false;
                }
                current = current.left;

                return helper(current, value);
            }
        }

        let answer = helper(current, value);

        return answer;
    }

    DFS_pre() {
        if (!this.root) {
            return;
        }
        let visited = [];

        let current = this.root;

        

        function helper(node) {
            visited.push(node);
            if (node.left) {
                let temp = node.left;
                helper(temp);
            }

            if (node.right) {
                let temp = node.right;
                helper(temp);
            }
        }

        helper(current);
        return visited;
    }

    DFS_post() {
        if (!this.root) {
            return;
        }
        let visited = [];

        let current = this.root;

        function helper(node) {
            if (node.left) {
                let temp = node.left;
                helper(temp);
                
            }

            if (node.right) {
                let temp = node.right;
                helper(temp);
               
                
            }

            visited.push(node);
        }

        helper(current);

        

        return visited;
    }

    DFS_in() {
        if (!this.root) {
            return;
        }
        let visited = [];

        let current = this.root;

        function helper(node) {
            if (node.left) {
                let temp = node.left;
                helper(temp);
                
            }
            visited.push(node);

            if (node.right) {
                let temp = node.right;
                helper(temp);
                
            }
        }

        helper(current);

        
       

        return visited;
    }



    
    BFS() {
        if (!this.root) {
            return;
        }
        let queue = [];
        let visited = [];

        let current = this.root;
        queue.push(current);

        while (queue.length) {
            current = queue.shift();

            visited.push(current);

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }

        return visited;
    }
}

tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
