from collections import deque

def isValid(row, col) :
    return (row<16 and row>=0 and col>=0 and col < 16 )
    
T = 10
for _ in range(1, T + 1):
    test_case = input()
    grid = []
    n = 16
    for _ in range (n) :
        row = list(map(int, input().strip()))
        grid.append(row)
        
    queue = deque([(1,1)])
    
    dr= [-1,1,0,0]
    dc=[0,0,-1,1]
    answer =0
    while queue : 
        r, c = queue.popleft()
        if grid[r][c] == 3 :
            answer = 1
            break
        for i in range(4) :
            nr = dr[i] + r
            nc = dc[i]+ c
            if isValid(nr,nc) and grid[nr][nc] != 1 :
                queue.append((nr, nc))
                if grid[nr][nc]!= 3:                    
                    grid[nr][nc] = 1
    print(f"#{test_case} {answer}")
          
