import heapq

def solution(jobs):
    jobs.sort()

    n = len(jobs)
    heap = []

    current = 0
    index = 0
    total = 0
    done = 0

    while done < n:
        while index < n and jobs[index][0] <= current:
            request, duration = jobs[index]
            heapq.heappush(heap, (duration, request))
            index += 1

        if heap:
            duration, request = heapq.heappop(heap)
            current += duration
            total += current - request
            done += 1
        else:
            current = jobs[index][0]

    return total // n