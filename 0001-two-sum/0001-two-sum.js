/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const indexArr = nums.map((value, index) => ({index, value}))
    indexArr.sort((a,b)=> a.value - b.value)

    let [l, r] = [0, indexArr.length-1]
    while(l<r) {
        let sum = indexArr[l].value + indexArr[r].value
        if(sum < target){
            l++
        }else if(sum > target){
            r--
        }else{
            return [indexArr[l].index, indexArr[r].index]
        }
    }

    //console.log(indexArr)
};