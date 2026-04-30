/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const totalSum = piles.reduce((acc,cur) => acc + cur, 0)
    const pilesNum = piles.length
    let max = Math.max(...piles)
    

    if(pilesNum === h){
        return max
    }

    //console.log(totalSum)
    let lo=1
    let hi =max

    const check = (k) => {
        let count =0
        for(const pile of piles){
            count += Math.ceil(pile/k)
        }

        return count <=h
    }

    while (lo < hi){
        let mid = Math.floor((lo+hi)/2)
        if(check(mid)){
            hi = mid
        }else{
            lo = mid+1
        }
    }

    return lo
};