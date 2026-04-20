/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    memo =[]
    const dp =(n)=>{

        if(n==0 || n==1){
            return 0
        }

        if(memo[n] !== undefined){
            return memo[n]
        }

        memo[n] = Math.min(
            dp(n-1)+cost[n-1], dp(n-2)+cost[n-2]
        )

        return memo[n]
    }

    return dp(cost.length)

    

    
};