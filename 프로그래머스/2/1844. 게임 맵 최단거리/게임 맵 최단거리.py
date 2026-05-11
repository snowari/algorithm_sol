from collections import deque

def solution(maps):
    row = len(maps)
    col = len(maps[0])
    answer = 0
    visited = [[False] * col for _ in range(row)]
    visited[0][0] = True
    dist = 1
    queue = deque([(0,0,dist)])
    
    
    def dfs(maps) :
        dr = [-1, 1, 0 ,0]
        dc = [0,0, -1,1]
        while queue  : 
            r,c,dist = queue.popleft()
            if(r== row-1 and c == col -1):
                return dist
            for i in range(4) :
                nr, nc = r + dr[i], c+dc[i]
                if(nr>=0 and nr<row and nc >=0 and nc<col and not visited[nr][nc] and maps[nr][nc]!=0):
                    visited[nr][nc] = True
                    queue.append((nr,nc,dist+1))
        return -1
    
    
    return dfs(maps)
    
    