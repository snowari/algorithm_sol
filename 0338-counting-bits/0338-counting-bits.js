/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = []
    ans.push(0)
    for(let i=1; i<=n; i++){
        let count =0
        let tmp = i
        while(tmp>0){
            count= count+( tmp & 1 )
            tmp = tmp >>> 1
        }
        ans.push(count)
    }
    return ans
};