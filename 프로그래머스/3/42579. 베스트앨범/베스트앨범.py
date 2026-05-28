def solution(genres, plays):
    genres_total = {}
    songs = {}

    for i in range(len(genres)):
        genre = genres[i]
        play = plays[i]

        genres_total[genre] = genres_total.get(genre, 0) + play

        if genre not in songs:
            songs[genre] = []

        songs[genre].append((i, play))

    sorted_genres = sorted(
        genres_total.keys(),
        key=lambda genre: genres_total[genre],
        reverse=True
    )

    answer = []

    for genre in sorted_genres:
        songs[genre].sort(key=lambda x: (-x[1], x[0]))

        for index, play in songs[genre][:2]:
            answer.append(index)

    return answer