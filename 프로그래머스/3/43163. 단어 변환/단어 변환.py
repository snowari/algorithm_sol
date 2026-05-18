from collections import deque

def count_diff(word1, word2) : 
    count = 0
    for a,b in zip(word1, word2):
        if(a!=b):
            count +=1
    return count
            

def solution(begin, target, words):
    visited = [False] * len(words)
    queue = deque([ (begin, 0) ])
    while queue :
        current, count = queue.popleft()
        if(current == target):
            return count
        
        for i in range(len(words)):
            if (not visited[i] and count_diff(current, words[i]) == 1):
                queue.append((words[i], count+1))
                visited[i] = True
    
    return 0