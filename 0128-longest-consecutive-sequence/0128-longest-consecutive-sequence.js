const longestConsecutive = (nums)=> {
    const numSet =  new Set(nums)
    let longest = 0
    for (const num of numSet){
        if(numSet.has(num-1)) continue

        let cnt = 1
        let target = 1+num
        while(numSet.has(target++)) cnt ++
        longest = Math.max(cnt, longest)
    }
    return longest
}