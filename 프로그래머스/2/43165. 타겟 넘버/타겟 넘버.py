from collections import deque

def solution(numbers, target):
    answer = 0
    n = len(numbers)
    
    queue = deque([(0,0)])
    while queue :
        current, index = queue.popleft()
        if index == n:     
            if current == target:
                answer+=1
            continue
        
        next = numbers[index]
        
        sum = next+current   
        queue.append((sum, index+1))
                
        sub = current-next
        queue.append((sub, index+1))
                    
                
    return answer