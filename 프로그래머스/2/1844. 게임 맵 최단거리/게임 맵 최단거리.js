function solution(maps) {
    
    const row = maps.length
    const col = maps[0].length
    const visited= Array.from({length : row}, () => Array(col).fill(false))
    
    const isInGrid = (nr,nc) => {
        return (nr>=0 && nr<row && nc>=0 && nc<col )
    }
    

    
    const bfs  = (maps)=>{
        const queue = [[0,0,1]]
        const dr = [-1, 1, 0, 0] // t b l r
        const dc = [0, 0, -1, 1]
        
        while (queue.length > 0){
            const [r, c, dist] = queue.shift()
            if (r === row -1 && c === col -1 ){
                return dist
            }
            for(let i=0; i<4; i++){
                const nr = r+ dr[i]
                const nc = c+ dc[i]
                
                if(isInGrid(nr, nc) && maps[nr][nc] != 0 && !visited[nr][nc]){
                    visited[nr][nc] = true
                    queue.push([nr,nc,dist+1])
                }
            }
            
        }
        return -1
    }
    return bfs(maps)
    
}
    