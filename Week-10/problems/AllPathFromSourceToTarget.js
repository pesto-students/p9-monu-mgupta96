const allPathFromSourceToTarget = (edges) => {
    let source = 0
    let target = edges.length-1
    let result = []
    const DFS = (node, path) => {
        if(node == target){
            result.push(path)
        }
        for(let i=0; i<edges[node].length; i++){
            let neighbour = edges[node][i];
            DFS(neighbour, [...path, neighbour])
        }
    }
    DFS(source, [0])
    return result
}

console.log(allPathFromSourceToTarget([[1,2],[3],[3],[]]))
// [ [ 0, 1, 3 ], [ 0, 2, 3 ] ]
console.log(allPathFromSourceToTarget([[4,3,1],[3,2,4],[3],[4],[]]))
// [
// [ 0, 4 ],
// [ 0, 3, 4 ],
// [ 0, 1, 3, 4 ],
// [ 0, 1, 2, 3, 4 ],
// [ 0, 1, 4 ]
// ]



// Time Complexity: O(2^V), The time complexity is exponential. Given a source and destination, the source and destination nodes are going to be in every path. Depending upon edges, taking the worst case where every node has a directed edge to every other node, there can be at max 2^V different paths possible in the directed graph from a given source to destination.
// Auxiliary space: O(2^V), To store the paths 2^V space is needed.