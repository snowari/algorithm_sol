# 출력 : 탑 높이 - 선반

test_case = int(input())
for t in range(1, test_case +1) :
    answer = 0
    N, B =map(int, input().split())
    talls = list(map(int, input().split()))

    total_sum = 0
    sum = []
    def dfs (index, total_sum) :
        if total_sum >= B :
            sum.append(total_sum)
            return
        if index == N :
            return
        dfs(index+1, total_sum + talls[index])
        dfs(index+1, total_sum)
    dfs(0, 0)
    minSum = min(sum)
    answer = minSum - B
    print(f"#{t} {answer}")