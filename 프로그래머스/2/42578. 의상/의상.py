def solution(clothes):
    answer = 1
    looks = {}
    
    for clothe, category in clothes :
        looks[category] = looks.get(category, 0) + 1
    
    for count in looks.values() :
        answer *= count + 1 
    return answer-1