function solution(m, n, h, w, drops) {
    const INF = drops.length + 1;
    const grid = Array.from({ length: m }, () => Array(n).fill(INF));

    drops.forEach(([r, c], idx) => {
        grid[r][c] = idx + 1;
    });

    const rowMin = Array.from({ length: m }, () => Array(n - w + 1));

    for (let r = 0; r < m; r++) {
        const deque = [];
        let head = 0;

        for (let c = 0; c < n; c++) {
            while (head < deque.length && deque[head] <= c - w) {
                head++;
            }

            while (
                head < deque.length &&
                grid[r][deque[deque.length - 1]] >= grid[r][c]
            ) {
                deque.pop();
            }

            deque.push(c);

            if (c >= w - 1) {
                rowMin[r][c - w + 1] = grid[r][deque[head]];
            }
        }
    }

    let best = -1;
    let answer = [0, 0];

    for (let c = 0; c <= n - w; c++) {
        const deque = [];
        let head = 0;

        for (let r = 0; r < m; r++) {
            while (head < deque.length && deque[head] <= r - h) {
                head++;
            }

            while (
                head < deque.length &&
                rowMin[deque[deque.length - 1]][c] >= rowMin[r][c]
            ) {
                deque.pop();
            }

            deque.push(r);

            if (r >= h - 1) {
                const top = r - h + 1;
                const value = rowMin[deque[head]][c];

                if (
                    value > best ||
                    (
                        value === best &&
                        (top < answer[0] || (top === answer[0] && c < answer[1]))
                    )
                ) {
                    best = value;
                    answer = [top, c];
                }
            }
        }
    }

    return answer;
}