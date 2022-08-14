class Node{
    constructor(val){
        this.val = val
        this.right = null
        this.left = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }


    insert(val){

        let newNode = new Node(val)

        if (!this.root) {
            this.root = newNode
            return
        }
    
        let helper = (root)=>{
            if (val > root.val){
                if(!root.right){
                    root.right = newNode
                }else{
                    helper(root.right)
                }
            }
            else{
                if(!root.left){
                    root.left = newNode
                }else{
                    helper(root.left)
                }
            }
        }

        helper(this.root)
    }

    find(val){

        if(!this.root) return

        if(this.root.val === val) return this.root

        let helper = (root) =>{
            if(!root) return
            if(root.val === val) return root

            if(val> root.val){
                return helper(root.right)
            }else{
                return helper(root.left)
            }
        }
        return helper(this.root)
    }

    bfs(){

        let queue = [this.root]
        let result = []

        while(queue.length){
            let node = queue.shift()
            result.push(node.val)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        return result
    }

    dfs_in(){

        let result = []
        let helper=(root)=>{
            if(!root) return

            helper(root.left)
            result.push(root.val)
            helper(root.right)
        }

        helper(this.root)
        return result
    }


    dfs_pre(){

        let result = []
        let helper=(root)=>{
            if(!root) return

            result.push(root.val)
            helper(root.left)
            helper(root.right)
        }

        helper(this.root)
        return result
    }

    dfs_post(){

        let result = []
        let helper=(root)=>{
            if(!root) return
            
            helper(root.left)
            helper(root.right)
            result.push(root.val)

        }

        helper(this.root)
        return result
    }

    max_depth(){
        let max_depth = 1

        let helper=(root, depth)=>{
            if(!root) return
            max_depth = Math.max(max_depth, depth)
            helper(root.right, depth+1)
            helper(root.left, depth+1)
        }
        helper(this.root, 1)
        return max_depth
    }

    level_order(){

        let result = {}

        let helper = (root ,level)=>{
            if (!root) return
            
            result[level]=  result[level]? result[level].concat(root.val) : [root.val]
            helper(root.left, level+1)
            helper(root.right, level+1)
        }
        helper(this.root, 1)
        return Object.values(result)
    }

    right_view(){
        let result = {}

        let helper = (root ,level)=>{
            if (!root) return
            
            result[level]=  result[level]? result[level].concat(root.val) : [root.val]
            helper(root.left, level+1)
            helper(root.right, level+1)
        }
        helper(this.root, 1)

        return Object.values(result).map(arr=>arr[arr.length-1])

    }

    validate_binary(){
        let result = true

        let helper =(root)=>{   
            if(!root) return false
            if(root.left && root.left.val > root.val) {
                result =  false
                return false
            }
            if(root.right && root.right.val < root.val){
                result =  false
                return false
            }
            helper(root.left)
            helper(root.right)
        }

        helper(this.root)
        return result
    }

    count_complete(){

        if (!this.root) return 0

        let count = 1
        let maxlevel = 0

        let helper = (root, level, z)=>{
            if(!root) return

            if(root.right){
                if(z){
                count= count+ level * 2
                }
                else{
                    count = count+ 2
                }
            }
            else if( root.left){
                if(z){
                count = count + ( (level * 2) -1 )
                } else {
                    count = count+1
                }
            }
            if (root.right.right || root.right.left){
                helper(root.right, level+1)
            }else{
                helper(root.left, level+1)
            }
        }

        let getMaxDepth = (root)=>{
            if(!root) return 
            maxlevel++
            getMaxDepth(root.left)
        }

        helper(this.root, 1, this.root.right? true: fasle )

        return Math.pow(2,maxlevel)-   ( Math.pow(2,maxlevel)-count)

    }

}



tree = new BinaryTree();

// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);

tree.insert(3);
tree.insert(6);
tree.insert(1);
tree.insert(9);
tree.insert(2);
tree.insert(4);
tree.insert(5);
tree.insert(8);



/// console.log(tree.dfs_pre())
// console.log(tree.dfs_post())
// console.log(tree.dfs_in())

console.log(tree.right_view())



