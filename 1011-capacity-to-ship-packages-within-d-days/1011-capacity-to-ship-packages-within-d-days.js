/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    const maxSum = Math.max(...weights)
    let hi = weights.reduce((acc,cur) => acc+cur, 0)
    let lo = maxSum

    const check = (storage) => {
        let sum =1
        let remain = storage
        for(const w of weights){
            if(remain<w){
                remain = storage
                sum ++
            }
            remain -= w
        }

        return (sum <= days)
    }

    while(lo < hi){
        let mid = Math.floor((lo+hi)/2)
        if(check(mid)){
            hi = mid
        }else{
            lo = mid+1
        }
    }
    
    return lo
}