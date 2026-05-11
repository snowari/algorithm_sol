function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            answer++;
            const queue = [i];
            visited[i] = true;

            while (queue.length > 0) {
                const curr = queue.shift();

                for (let j = 0; j < n; j++) {
                    if (computers[curr][j] === 1 && !visited[j]) {
                        visited[j] = true;
                        queue.push(j);
                    }
                }
            }
        }
    }

    return answer;
}