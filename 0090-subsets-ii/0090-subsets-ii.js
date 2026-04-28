/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const n = nums.length
    const answer = []
    
    nums = nums.sort((a,b)=> a-b)

    const backtracking = (start, currentSubset)=>{
        answer.push([...currentSubset])
        

        for(let i=start; i<n; i++){
            if( i > start && nums[i] === nums[i-1] ) {
                continue
            }

            currentSubset.push(nums[i])
            backtracking(i+1, currentSubset)
            currentSubset.pop()
        }
    }
    
    backtracking(0, [])

    return answer

    
};