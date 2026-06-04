function solution(n, edge) {
    const graph = Array.from({length : n+1}, ()=> [])
    for (const [a,b] of edge) {
        graph[a].push(b)
        graph[b].push(a)
    }
    
    const distance = Array(n+1).fill(-1)
    distance[1] = 0
    const queue = [1]
    let head = 0
    while (head < queue.length) {
        const node = queue[head++]
        for (const next of graph[node]) {
            if (distance[next] === -1 ) {
                distance[next] = distance[node] + 1
                queue.push(next)
            }
        }
    }
    
    const maxDist = Math.max(...distance)
    return distance.filter((dist) => dist === maxDist).length
    
}