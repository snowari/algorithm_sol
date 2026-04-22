/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const answer = []

    const grid = Array.from({length : n}, ()=>Array(n).fill('.'))
    const usedCols = new Set()
    const usedDiagRD = new Set()
    const usedDiagRU = new Set()

    const dfs = (row) => {
        if(row === n){
            answer.push(grid.map(r => r.join("")))
            return
        }

        for(let col=0 ; col<n ; col ++ ){
            if( usedCols.has(col) || usedDiagRD.has(row+col) || usedDiagRU.has  (row-col)){
                continue
            }
            grid[row][col] = "Q"
            usedCols.add(col)
            usedDiagRD.add(row + col)
            usedDiagRU.add(row - col)

            dfs(row+1)

            usedCols.delete(col)
            usedDiagRD.delete(row + col)
            usedDiagRU.delete(row - col)
            grid[row][col] = "."
        }
    }

    dfs(0)
    return answer
    
    
};