const numIslands = (grid) => {
    const row_len = grid.length;
    const col_len = grid[0].length;
    const visited = Array(row_len).fill().map(() => Array(col_len).fill(false));
    let number_of_islands = 0;

    for (let i = 0; i < row_len; i++) {
        for (let j = 0; j < col_len; j++) {
            if (grid[i][j] === "1" && !visited[i][j]) { //방문하지 않은 섬이면
                bfs(i, j, grid, visited); //인접 섬 찾기
                number_of_islands++;
            }
        }
    }
    return number_of_islands;
}

const isInRange = (r, c, row_len, col_len) => {
    return r >= 0 && r < row_len && c >= 0 && c < col_len;
}

const bfs = (r, c, grid, visited) => {
    const row_len = grid.length;
    const col_len = grid[0].length;
    const delta = [[-1,0],[1,0],[0,-1],[0,1]];
    const queue = [[r, c]];
    let head = 0;
    visited[r][c] = true;

    while (head < queue.length) {
        const [cur_r, cur_c] = queue[head++];
        delta.forEach(([dr, dc]) => {
            const next_r = cur_r + dr;
            const next_c = cur_c + dc;
            if (isInRange(next_r, next_c, row_len, col_len)) {
                if (grid[next_r][next_c] === "1" && !visited[next_r][next_c]) {
                    visited[next_r][next_c] = true;
                    queue.push([next_r, next_c]);
                }
            }
        });
    }
}