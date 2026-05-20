from collections import deque 

tunnel = {
    1: [0, 1, 2, 3],
    2: [0,1],
    3: [2,3],
    4: [0,3],
    5: [1,3],
    6: [1,2],
    7: [0,2]
}

open_opposite = [1, 0, 3, 2] # 하상우좌

dr = [-1, 1, 0,0]
dc =[0, 0, -1, 1]

test_case = int(input())
for t in range(1, test_case+1):
    m, n, hole_row, hole_col, time = map(int, input().split())
    visited = [ [False] * n for _ in range(m)]
    visited[hole_row][hole_col]= True
    grid = []
    for _ in range(m) :
        row = list(map(int, input().split()))
        grid.append(row)

    def isValid(r, c) :
        return 0<=r<m and 0<=c<n and not visited[r][c] and grid[r][c] != 0

    queue = deque( [(hole_row, hole_col, 1)] )
    answer =1 
    while queue :
        r, c, count = queue.popleft()
        c_tunnel = grid[r][c]
        if count == time :
            continue
        for dir in tunnel[ c_tunnel ] :
            nr = r + dr[dir]
            nc = c + dc[dir]
            
            if isValid(nr,nc) :
                n_tunnel = grid[nr][nc]
                if open_opposite[dir] in tunnel[n_tunnel] :
                    visited[nr][nc] = True
                    answer+=1
                    queue.append((nr, nc, count +1))

    print(f"#{t} {answer}")