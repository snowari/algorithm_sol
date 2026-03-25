const twoSum = function(nums, target) {
    const memo = {}
    for(const [i, num] of nums.entries()){
        const needed = target - num
        if(needed in memo){
            return [memo[needed], i]
        }
        memo[num] = i
    }

    return [-1, -1]

    //console.log(indexArr)
};