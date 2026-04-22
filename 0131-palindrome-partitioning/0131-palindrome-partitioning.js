var partition = function(s) {
    const n = s.length
    const answer = []

    
    const dp = Array.from({length: n}, () => Array(n).fill(false))

    for (let i = n-1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j] && (j - i <= 1 || dp[i+1][j-1])) {
                dp[i][j] = true
            }
        }
    }


    const dfs = (start, current) => {
        if (start === n) {
            answer.push([...current])
            return
        }
        for (let end = start; end < n; end++) {
            if (dp[start][end]) {
                current.push(s.slice(start, end+1))
                dfs(end+1, current)
                current.pop()
            }
        }
    }

    dfs(0, [])
    return answer
}