from collections import deque

def solution(n, computers):
    answer =0
    visited = [False] * n
    graph = [[] for _ in range(n)]
    for i in range(n):
        for j in range(i+1, n):
            if computers[i][j] == 1 :
                graph[i].append(j)
                graph[j].append(i)
    
    
    for i in range(n):
        if not visited[i]:
            answer +=1
            queue = deque([i])
            visited[i] = True
            while queue :
                curr = queue.popleft()
                for neighbor in graph[curr]:
                    if not visited[neighbor] :
                        visited[neighbor] = True
                        queue.append(neighbor)
    return answer