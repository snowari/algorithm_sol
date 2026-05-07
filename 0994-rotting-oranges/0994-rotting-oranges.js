/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    const grid_row = grid.length
    const grid_col = grid[0].length
    let min = 0

    const isValid = (r,c) => {
        if(r>=0 && r<grid_row && c>=0 && c< grid_col && grid[r][c] === 1 ){
            return true
        }else
            return false
    }

    const dfs  = (grid) => {
        
        const queue = []
        const dr = [-1,1,0,0]
        const dc = [0,0,-1,1]
        let m=0

        for(let i=0; i<grid_row; i++){
            for(let j=0; j<grid_col; j++){
                if(grid[i][j] === 2){
                    queue.push([i,j,0])
                }
            }
        }

        while(queue.length > 0){
            const [r,c,m] = queue.shift()
            min = Math.max(m, min)
            console.log(grid)
            for(let i=0; i<4; i++){
                const nr = r+dr[i]
                const nc = c+dc[i]

                if(isValid(nr,nc)){
                    queue.push([nr,nc,m+1])
                    grid[nr][nc] = 2
                }

            }
        }
    }

    dfs(grid)

    for(const row of grid){
        for(const cell of row){
            if(cell === 1){
                return -1
            }
        }
    }

    return min
    
};