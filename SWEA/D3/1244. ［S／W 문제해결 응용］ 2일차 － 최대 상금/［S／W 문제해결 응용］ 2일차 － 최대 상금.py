from collections import deque

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    numbers, k = input().split()
    n = len(numbers)
    k = int(k)
    queue = deque([(numbers, 0)])
    answer = 0
    visited = set()
    while queue :
        current, count = queue.popleft()
        if count == k :
            answer = max(answer, int(current))
            continue
       	
        current_array = list(current)
        for i in range(n) :
            for j in range(i+1, n):
                
                current_array[j], current_array[i] = current_array[i], current_array[j]
                next_str = "".join(current_array)
                
                if (next_str, count+1) not in visited:
                    queue.append((next_str, count+1))
                    visited.add((next_str, count+1))
                                
                current_array[j], current_array[i] = current_array[i], current_array[j]
    print(f"#{test_case} {answer}")    
                   
                
                                       
                
    
    
