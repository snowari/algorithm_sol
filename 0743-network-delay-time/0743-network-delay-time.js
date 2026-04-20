function networkDelayTime(times, n, k) {
    // 인접 리스트 그래프 구성
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    // 다익스트라
    const distance = Array(n + 1).fill(Infinity);
    distance[k] = 0;

    const pq = [[0, k]];

    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        const [dist, now] = pq.shift();

        if (distance[now] < dist) continue;

        for (const [vv, ww] of graph[now]) {
            const cost = distance[now] + ww;
            if (cost < distance[vv]) {
                distance[vv] = cost;
                pq.push([cost, vv]);
            }
        }
    }

    // 1번 인덱스부터 n번까지 최대값
    const result = Math.max(...distance.slice(1));

    return result === Infinity ? -1 : result;
}