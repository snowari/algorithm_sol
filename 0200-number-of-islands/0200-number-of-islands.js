/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const grid_row = grid.length
    const grid_col = grid[0].length
    const visited = Array.from({length : grid_row }, ()=> Array(grid_col).fill(false))
    let cnt = 0

    const isValid = (nr, nc) => {
        if(nr>=0 && nr<grid_row && nc>=0 && nc < grid_col && grid[nr][nc] === "1" && !visited[nr][nc]){
            return true
        }else{
            return false
        }
    }

    const bfs = (row,col) => {
        const queue = [[row,col]]
        const dr = [-1,1,0,0]
        const dc = [0,0, -1,1] // t, b, l, r
        visited[row][col] = true
        while (queue.length > 0){
            const [r,c] = queue.shift()
            for(let i =0; i<4; i++){
                const nr = r+dr[i]
                const nc = c+dc[i]

                if (isValid(nr,nc)){
                    queue.push([nr,nc])
                    visited[nr][nc] = true
                }
            }

        }
    }



    for(let row =0; row<grid_row; row ++){
        for(let col=0; col<grid_col; col ++){
            if (grid[row][col] === "1" && visited[row][col] !== true){
                cnt ++
                bfs(row,col)
            }
        }
    }


    //console.log(visit)
    return cnt
};