/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {

    const len = nums.length
    const totalSum = nums.reduce((arr,cur) => arr+cur)

    let hi = totalSum
    let lo = Math.max(...nums)

    const check = (mid)=>{
        //let flag =0
        console.log(mid + "로 검사중")
        let sum =0
        let cnt = 1
        for(let i=0; i<len; i++){
            console.log(sum+ " 더할거임" )
            if(sum + nums[i] > mid){
                //flag = i
                sum = nums[i]
                cnt ++
                console.log(i+" 나눴음")
            }else{
                sum += nums[i]
            }
            console.log(sum)
        }
        console.log("-----------")

        return (cnt <=k)
    }

    while (lo < hi) {
        let mid = Math.floor((hi + lo)/2)
        if (check(mid)){
            hi = mid
        }else{
            lo = mid +1
        }

    }

    return lo

    
};