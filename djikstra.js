class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }


class WG{

    constructor(){
        this.adjancencyList={}
        }
    
    addVertex(vertex){
        if(!this.adjancencyList[vertex]){
            this.adjancencyList[vertex]=[]
        }
    }

    addEdge(v1,v2,weight){
        if(!this.adjancencyList[v1]||!this.adjancencyList[v2]){
            console.log("no")
            return
        }

        this.adjancencyList[v1].push({node:v2,weight:weight})
        this.adjancencyList[v2].push({node:v1,weight:weight})

    }

    djk(start, finish){
        const nodes = new PriorityQueue()

        const distances = {}

        const previous ={}

        let smallest

        for (let vertex in this.adjancencyList){
            if (vertex===start){
                distances[vertex]=0
                nodes.enqueue(vertex,0)
            }else{
                distances[vertex]=Infinity
                nodes.enqueue(vertex,Infinity)
            }
            previous[vertex]=null
        }
        while(nodes.values.length){
            smallest = nodes.dequeue().val
            if (smallest===finish){

            }


        }
    }

    







}

graph = new WG()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.djk("A","E")
