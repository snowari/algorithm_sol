test_case =int(input())
for t in range(1, test_case+1) :
    n, k = map( int, input().split())
    grid = []
    for _ in range(n):
        row = list(map(int, input().split()))
        grid.append(row)
    peak = max(map(max,grid))
    peaks = []
    for i in range(n) :
        for j in range(n):
            if  grid[i][j] == peak :
                peaks.append((i,j))

    dr = [-1, 1, 0, 0]
    dc = [0, 0, -1, 1]
    
    visited = [[False] * n for _ in range(n)]
    answer= [1]
    
    def isValid( row, col) :
        return 0<=row<n and 0<=col<n and not visited[row][col]
    
    def dfs (r, c, isTrim, dist) :
        answer[0] = max(dist, answer[0])
        visited[r][c] = True
        for i in range (4) :
            nr = dr[i] + r
            nc = dc[i] + c
            if not isValid(nr,nc) :
                continue
            if grid[nr][nc] < grid[r][c] :
                dfs(nr, nc, isTrim, dist+1)
            elif grid[nr][nc] - k < grid[r][c] and not isTrim:
                original = grid[nr][nc]
                grid[nr][nc] = grid[r][c] -1
                dfs(nr,nc, True, dist+1)
                grid[nr][nc] = original
        visited[r][c] = False
    for r, c in peaks :
        dfs(r,c, False, 1)
    print(f"#{t} {answer[0]}")