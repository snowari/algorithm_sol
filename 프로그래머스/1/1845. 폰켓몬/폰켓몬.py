def solution(nums):
    answer = 0
    max_pick = len(nums)//2
    type_count = len(set(nums))
    
    answer = min(max_pick, type_count)
    
    return answer