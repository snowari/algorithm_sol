def solution(participant, completion):
    counts = {}
    for name in participant:
        counts[name] = counts.get(name, 0) + 1

    for name in completion:
        counts[name] -= 1

    for name in counts:
        if counts[name] > 0:
            return name

    return -1
