/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const n = nums.length
    const keys = new Set()
    const answer = []
    nums = nums.sort((a,b)=> a-b)

    for(let mask =0 ; mask < (1 << n) ; mask ++){
    

        const subset = []
        for(let i=0; i<n; i++){
            if(mask & (1<<i) ){
                subset.push(nums[i])
            }
        }

        const key = subset.join(',')
        if(!keys.has(key)){
            keys.add(key)
            answer.push(subset)
        }
    }

    return answer

    
};