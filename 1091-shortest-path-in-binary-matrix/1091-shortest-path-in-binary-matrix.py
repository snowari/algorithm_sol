from collections import deque

class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        row = len(grid)
        col = len(grid[0])
        queue = deque([(0,0,1)])

        dr = [-1,1,0,0,-1,-1,1,1] #상하좌우 위위아래아래
        dc = [0,0,-1,1,-1,1,-1,1]

        if (grid[0][0] ==1 or grid[row-1][col-1] == 1):
            return -1
        
        
        while queue:
            r,c,d= queue.popleft()
            if(r == row-1 and c == col-1):
                return d
            for i in range(8):
                nr = r+dr[i]
                nc = c+dc[i]

                
                if(nr >=0 and nc >= 0 and nr <row and nc< col and grid[nr][nc] == 0):
                    queue.append((nr,nc,d+1))
                    grid[nr][nc] = 1
        
        return -1




            
            

        
        