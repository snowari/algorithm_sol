function solution(rows, columns, queries) {
    const answer = [];
    
    const queriesStartOne = queries.map(v => v+1)
    const grid = Array.from({ length: rows }, (_, r) =>
        Array.from({ length: columns }, (_, c) => columns * r + c + 1)
    );
          
                            
    for(let i=0; i<queries.length ; i++ ){
        const [x1, y1, x2, y2] = queries[i].map(v => v - 1);

        const temp = grid[x1][y1]
        let min = temp
        
        //왼쪽 변
        for(let k=x1 ; k<x2; k++){
            grid[k][y1] = grid[k+1][y1]
            min = Math.min(grid[k][y1], min)
        }
        //console.log(grid)
        
        //아래 변
        for(let k=y1; k<y2; k++){
            grid[x2][k] = grid[x2][k+1]
            min = Math.min(grid[x2][k], min)
        }
        //console.log(grid)
        
        //오른쪽 변
        for(let k=x2; k>x1; k--){
            grid[k][y2] = grid[k-1][y2]
            min = Math.min(grid[k][y2], min)
        }
        //console.log(grid)
        
        //위쪽 변
        for(let k=y2; k>y1; k--){
            grid[x1][k] = grid[x1][k-1]
            min = Math.min(grid[x1][k], min)
        }
        
        grid[x1][y1+1] = temp
        
        //console.log(grid)
        answer.push(min)
        
    }
    
    return answer;
}