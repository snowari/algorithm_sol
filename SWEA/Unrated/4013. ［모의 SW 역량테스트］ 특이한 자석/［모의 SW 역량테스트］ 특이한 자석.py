# 5. 자석을 회전시키는 방향 시계방향이 1 로, 반시계 방향이 -1 로 주어진다.
#
# 6. 날의 자성은 N 극이 0 으로, S 극이 1 로 주어진다.
# 자석 4개 [8] // [0] 이 점수
# [2] 를 계속 검사

test_case = int(input())
for t in range(1, test_case+1):
    k = int(input())
    magnet = []
    for _ in range(4):
        magnet.append(list(map(int, input().split())))

    command = []
    for _ in range(k) :
        i, d = map(int,input().split())
        command.append((i-1,d))


    #회전 방향 계산
    for com in command :
        i, d = com
        turn = [0, 0, 0, 0]
        turn[i] = d
        #왼쪽 자석들 회전
        for current in range(i,0,-1):
            if magnet[current][6] != magnet[current-1][2] :
                turn[current-1] = -turn[current]
            else :
                break
        #오른쪽 자석들 회전
        for current in range(i,3) :
            if magnet[current][2] != magnet[current+1][6] :
                turn[current+1] = -turn[current]
            else :
                break
        #회전
        for i in range(4) :
            #시계 방향
            if turn[i] == 1 :
                temp = magnet[i][7]
                for j in range(7,0,-1):
                    magnet[i][j] = magnet[i][j-1]
                magnet[i][0] = temp
            elif turn [i] == -1 :
                temp = magnet[i][0]
                for j in range(7):
                    magnet[i][j] = magnet[i][j+1]
                magnet[i][7] = temp



    answer = 0
    for i in range(4):
        if magnet[i][0] == 1:
            answer += 2 ** i

    print(f"#{t} {answer}")