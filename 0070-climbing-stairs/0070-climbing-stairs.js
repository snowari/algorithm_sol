/**
 * @param {number} n
 * @return {number}
 */
 
 const climbStairs = (n) => {
    const memo = {}
    const dp = (i) => {
        if (i<=2) return i
        if (memo[i]) return memo[i]
        return memo[i] = dp(i-2) + dp(i-1)
    }

    return dp(n)
};