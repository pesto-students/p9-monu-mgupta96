class Graph{
    constructor(){
        this.adjList = {};
        this.nVertices = 0;
    }
    getVertex(){
        return this.nVertices;
    }
    addVertex(v){
        this.adjList[v] = []
        this.nVertices++;
    }
    removeVertex(v){
        if(this.adjList[v]){
            let adjacents = this.adjList[v]
            for(let x of adjacents){
                this.removeEdge(x, v)
            }
            delete this.adjList[v];
            this.nVertices--;
        }

    }
    addEdge(v1, v2){
        if(!this.adjList[v1])
            this.addVertex(v1);
        if(!this.adjList[v2])
            this.addVertex(v2);
        if(!this.adjList[v1].includes(v2))
            this.adjList[v1].push(v2);
        if(!this.adjList[v2].includes(v1))
            this.adjList[v2].push(v1) 
    }
    removeEdge(v1, v2){
        this.adjList[v1] = this.adjList[v1].filter(x => x!=v2)
        this.adjList[v2] = this.adjList[v2].filter(x => x!=v1)
    }
    bfs(){
        let sv = parseInt(Object.keys(this.adjList)[0]);
        let visited = new Set([sv])
        let queue = [sv]
        while (queue.length){
            let data = queue.shift()
            for(let j=0; j<this.adjList[data].length; j++){
                let key = this.adjList[data][j]
                if(!visited.has(key)){
                    queue.push(key);
                    visited.add(key);
                }
            }
        }
        return visited;
    }
    dfs() {
        let sv = parseInt(Object.keys(this.adjList)[0]);
        let visited = new Set();
        let stack = [sv];
        while (stack.length) {
            let data = stack.pop();
            if (!visited.has(data)) {
                visited.add(data);
                for (let j = this.adjList[data].length - 1; j >= 0; j--) {
                    let key = this.adjList[data][j];
                    if (!visited.has(key)) {
                        stack.push(key);
                    }
                }
            }
        }
        return visited;
    }
}

const g = new Graph();
g; // Graph { adjList: {}, nVertices: 0 }
g.addEdge(1,2);
g.addEdge(2,3);
g.addEdge(3,4);
g.addEdge(1,4);
g.addEdge(1,5);
g.removeVertex(5);
g; // Graph { adjList: { 1: [ 2, 4 ], 2: [ 1, 3 ], 3: [ 2, 4 ], 4: [ 3, 1 ] }, nVertices: 4 }
// final graph looks like
//    1
//   / \
//  2   4
//   \ /
//    3

console.log('BFS: ', g.bfs())
// BFS:  Set(4) { 1, 2, 4, 3 }
console.log('DFS: ', g.dfs())
// DFS:  Set(4) { 1, 2, 3, 4 }
