# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, 11):
    tc = int(input())
    ladder = []
    n = 100
    for _ in range(n):
        row = list(map(int, input().split()))
        ladder.append(row)
    for i in range(n):
        if ladder[n-1][i] == 2:
            prize_index = i
            
    nr, nc = n-1, prize_index
    while nr > 0: 
        ladder[nr][nc] = 0
        if nc - 1 >= 0 and ladder[nr][nc-1] == 1:
            nc -= 1          
        elif nc + 1 < n and ladder[nr][nc+1] == 1:
            nc += 1
        else:  
            nr -= 1


    print(f"#{tc} {nc}")