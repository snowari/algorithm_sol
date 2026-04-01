/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) =>{
    if(grid[0][0] ===1) {
        return -1
    } 
    const queue = [[0, 0, 1]]
    let head = 0
    grid[0][0] = 1
    const n= grid.length
    if(n===1) return 1


    const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
    while(head<queue.length){
        const [r,c,dist] = queue[head++]
        for(const [dr,dc] of dirs){
            const nr = r + dr
            const nc = c + dc

            if(nr<0 || nc<0 || nr>=n || nc>=n) continue
            if(grid[nr][nc] === 1 ) continue
            if(nr === n-1 && nc === n-1) return dist+1

            grid[nr][nc] = 1
            queue.push([nr,nc,dist+1])
        }
    }
    return -1
};

