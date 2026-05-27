def solution(phone_book):
    
    book = set(phone_book)
    for phone in book:
        prefix = ""
        for c in phone[:-1]:
            prefix += c
            if prefix in book:
                return False
    return True
    
    
    
    
    answer = True
    
    return answer
