class Graph {
    constructor() {
        this.adjacencyList = {

        }
    }

    addVertex(name) {
        if (!this.adjacencyList[name])
            this.adjacencyList[name] = []
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
            console.log("no")
        }

        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
            console.log("no")
        }

        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)

        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)


    }

    removeVertex(vR) {

        for (let x in this.adjacencyList) {
            this.removeEdge(x, vR)
        }

        delete this.adjacencyList[vR]
    }


    DFS(start) {
        let list = this.adjacencyList
        let visited = {}
        let result =[]

        function helper(v) {
            if (!list[v]) {
                return
            }

            result.push(v)
            visited[v] = true

            for (let x of list[v]) {
                if (!visited[x])
                    helper(x)
            }

        }


        helper(start)
        return result


    }
    I_DFS(start){
        let current=start
        let visited={}
        let stack=[]
        let result=[]

        stack.push(current)
        visited[current]=true
        while(stack.length!==0){

            current= stack.pop()
            
            result.push(current)
            
            for(let x of this.adjacencyList[current]){
                if(!visited[x]){
                    visited[x]=true
                    stack.push(x)
                }

            }

            
           
        }
        return result
    }

    BFS(start){
        let current=start
        let visited={}
        let queue=[]
        let result=[]

        queue.push(current)
        visited[current]=true
        while(queue.length!==0){
            
            for(let x of this.adjacencyList[current]){
                if(!visited[x]){
                    visited[x]=true
                    queue.push(x)
                }

            }

            result.push(queue.shift())

            current=queue[0]
           
        }
        return result
    }






}




g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")





