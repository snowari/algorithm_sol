test_case = int(input())
for t in range(1, test_case+1) :
    n, time, gun_n = map(int, input().split())
    gun =[]
    #row col num dir

    for i in range(gun_n) :
        row, col, num, dir = list(map(int, input().split()))
        gun.append((row,col,num,dir))

    
    grid = [ [0] * n for _ in range (n)]
    for i in range(n) :
        grid[0][i] = -1
        grid[n-1][i] = -1
        grid [i][0] = -1
        grid [i][n-1] = -1
        
    for i in range(gun_n) :
        row, col, num, dir = gun[i]
        grid[row][col] = gun[i]
    
    dr = [-1, 1, 0, 0] #상하좌우
    dc = [0, 0, -1, 1]
    #1 2 3 4 
    # 2 1 4 3
    dir_reverse = [0,2,1,4,3]
    def isBorder (row, col) :
        return row==0 or col==0 or row== n-1 or col == n-1
    while time > 0 : 
        next_grid = [[[] for _ in range(n)] for _ in range(n)]
        for row, col, num, dir in gun :
            n_row = row+dr[dir-1]
            n_col = col + dc[dir-1]
            if isBorder(n_row, n_col) :
                num = num //2
                dir = dir_reverse[dir]
            if num > 0 :
                next_grid[n_row][n_col].append((n_row, n_col, num, dir))

        gun = []
        for i in range (n) :
            for j in range(n) :
                if len(next_grid[i][j]) == 1 :
                    gun.append((next_grid[i][j][0]))
                elif len(next_grid[i][j]) > 1 :
                    total = 0
                    max_num = 0
                    max_dir =0
                    for row, col, num, dir in next_grid[i][j] :
                        total += num 
                        if max(max_num, num) != max_num :
                            max_num = num
                            max_dir = dir
                    gun.append((i, j, total, max_dir))
        time -=1

        
        
    answer =0
        
    for row, col, num, dir in gun :
        answer += num
    print(f"#{t} {answer}")
   