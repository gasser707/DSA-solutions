class Graph {

    constructor() {
        this.adjacencyList = {}
    }


    addVertex(v) {
        if (!this.adjacencyList[v])
            this.adjacencyList[v] = []
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return

        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }


    DFS(v) {
        let visited = {}
        let stack = []
        let result = []

        stack.push(v)

        while (stack.length) {

            let current = stack.pop()
            visited[v] = true

            result.push(current)

            for (let x of this.adjacencyList[current]) {
                if (!visited[x]) {
                    visited[x] = true
                    stack.push(x)
                }

            }
        }
        return result
    }
}






// g = new Graph()
// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")

// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B", "D")
// g.addEdge("C", "E")
// g.addEdge("D", "E")
// g.addEdge("D", "F")
// g.addEdge("E", "F")

// console.log(g.DFS("A"))

class DirectedGraph {

    constructor() {
        this.adjacencyList = {}
    }


    addVertex(v) {
        if (!this.adjacencyList[v])
            this.adjacencyList[v] = []
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return

        this.adjacencyList[v1].push(v2)
    }


    DFS(v) {
        let visited = {}
        let stack = []
        let result = []

        stack.push(v)

        while (stack.length) {

            let current = stack.pop()
            visited[v] = true

            result.push(current)

            for (let x of this.adjacencyList[current]) {
                if (!visited[x]) {
                    visited[x] = true
                    stack.push(x)
                }

            }
        }
        return result
    }
}

class WeightedDirectedGraph {

    constructor() {
        this.adjacencyList = {}
    }


    addVertex(v) {
        if (!this.adjacencyList[v])
            this.adjacencyList[v] = []
    }

    addEdge(v1, v2, weight) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return

        this.adjacencyList[v1].push([v2, weight])
    }


    DFS(v) {
        let visited = {}
        let stack = []
        let result = []

        stack.push(v)

        while (stack.length) {

            let current = stack.pop()
            visited[v] = true

            result.push(current)

            for (let x of this.adjacencyList[current]) {
                if (!visited[x]) {
                    visited[x] = true
                    stack.push(x)
                }

            }
        }
        return result
    }
}

function informAll(employees, managers, informTime, headID) {

    let time = 0
    let g = new WeightedDirectedGraph()

    for (let i = 0; i < employees.length; i++) {
        g.addVertex(employees[i])

    }

    for (let i = 0; i < employees.length; i++) {
        if (managers[i] !== -1)
            g.addEdge(managers[i], employees[i], informTime[managers[i]])
    }

    // return g.adjacencyList
    let helper = (v, temp) => {
        time = Math.max(time, temp)

        for (let x of g.adjacencyList[v]) {
            helper(x[0], temp + x[1])
        }

    }

    helper(headID, 0)

    return time

}

// console.log(informAll([0, 1, 2, 3, 4, 5, 6, 7], [2, 2, 4, 6, -1, 4, 4, 5], [0, 0, 4, 0, 7, 3, 6, 0], 4))



function courseScheduler(courses) {

    let g = new DirectedGraph()
    let nodes = new Set()

    for (let i = 0; i < courses.length; i++) {
        g.addVertex(courses[i][0])
        g.addVertex(courses[i][1])
        g.addEdge(courses[i][1], courses[i][0])
    }


    let helper = (v, hasParent) => {
        for (let x of g.adjacencyList[v]) {
            if (!hasParent[x] && nodes.has(x)) return true
            if (!hasParent[x]) {
                nodes.add(x)
                hasParent[x] = true
                res = helper(x, { ...hasParent })
                if (!res) return false
            } else {
                return false
            }
        }

        return true
    }

    for (let i = 0; i < courses.length; i++) {
        if (nodes.has(courses[i][1])) {
            continue
        }

        if (!helper(courses[i][1], {})) return false
    }

    return true
}

// console.log(courseScheduler([[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]))
// console.log(courseScheduler([ [4, 5], [6,4], [5,6]]))
// console.log(courseScheduler([[1,4],[2,4],[3,1],[3,2]]))
// console.log(courseScheduler([]))



