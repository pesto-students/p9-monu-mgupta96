var validPath = function(n, edges, source, destination) {
    let adjList = {};
    for(edge of edges){
        adjList[edge[0]] ? adjList[edge[0]].push(edge[1]) : adjList[edge[0]] = [edge[1]] 
        adjList[edge[1]] ? adjList[edge[1]].push(edge[0]) : adjList[edge[1]] = [edge[0]] 
    }
    let queue = [source]
    let visited = Array(n).fill(false)
    while(queue.length){
        let curr = queue.shift()
        for(i=0; i<adjList[curr].length; i++){
            let key = adjList[curr][i]
            if(key == destination){return true}
            if(!visited[key]){
                visited[key] = true
                queue.push(key)
            }
        }
    }
    return false
}

let result1 = validPath(3, [[0,1],[1,2],[2,0]], 0 , 2)
console.log(result1) // true


let result2 = validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0 ,5)
console.log(result2) // false


// TC: O(V+E)
// SC: O(V)