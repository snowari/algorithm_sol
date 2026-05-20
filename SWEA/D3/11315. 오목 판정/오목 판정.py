test_case = int(input())
from collections import deque
for t in range(1, test_case+1) :
    n = int(input())
    grid = []
    for _ in range(n) :
        row = list(input().strip())
        grid.append(row)
    dr = [0, 1, -1,1] #우 하 업 다운
    dc = [1, 0,1,1]
    
    def isValid(row,col) :
        return row<n and row>=0 and col<n and col>=0 and grid[row][col] == 'o'
    answer = "NO"
    def solution() :
        for i in range(n) :
            for j in range(n) :
                if grid[i][j] == 'o' :
                    for d in range(4) :
                        count =1
                        for k in range(1,5):
                            nr = i + dr[d] * k
                            nc = j + dc[d] * k
                            if isValid(nr,nc) :
                                count +=1
                            else :
                                break
                        if count==5 : 
                            return "YES"
                        
        return "NO"
    answer = solution()
    print(f"#{t} {answer}")
            
        
    