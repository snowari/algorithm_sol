from collections import deque

class Solution:



    def orangesRotting(self, grid: List[List[int]]) -> int:
        row_len = len(grid)
        col_len = len(grid[0])

        def isValid(row, col) :
            if(row >=0 and col>=0 and row<row_len and col<col_len):
                return True
            else :
                return False

        queue = deque()
        
        for i in range(row_len) :
            for j in range(col_len):
                if(grid[i][j] ==2 ):
                    queue.append((i, j, 0))

        dr = [-1, 1, 0, 0]
        dc = [0,0,-1,1]
        time = 0
        while(queue) : 
            r,c,t = queue.popleft()
            time = max(time, t)
            for i in range(4) : 
                nr = r+dr[i]
                nc = c+dc[i]
                if(isValid(nr,nc) and grid[nr][nc] == 1):
                    queue.append((nr,nc,t+1))
                    grid[nr][nc] = 2
        
        for row in grid : 
            if 1 in row:
                return -1
        return time
            

    