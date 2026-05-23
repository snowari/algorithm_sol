def solution(n, times):
    lo = 1
    hi = min(times) * n
    
    
    while (lo < hi) :
        mid = (lo+hi)//2
        sum =0
        for time in times :
            sum += mid//time
        
        if sum < n :
            lo = mid + 1
        else :
            hi = mid
    
        
        
    return lo