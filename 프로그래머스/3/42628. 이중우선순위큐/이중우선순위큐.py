from collections import deque

def solution(operations):
    answer = []
    queue = []
    top = []
    command = deque()
    for oper in operations :
        code, num = oper.split()
        num = int(num)
        command.append((code, num))
    while command : 
        code, num = command.popleft()
        if code == "I" :
            top.append(num)
        if top:
            if code == "D" and num < 0 :
                minNum =min(top)
                top.remove(minNum)
            elif code == "D" and num > 0 :
                maxNum = max(top)
                top.remove(maxNum)
        else :
            continue
    if top :
        nmin = min(top)
        nmax = max(top)
        return [nmax, nmin]
        
    else :
        return [0, 0]
            
            
        
    
        
    return answer