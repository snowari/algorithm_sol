/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {

    let lo = 1
    let hi = Math.max(...quantities)

    const check = (mid) => {
        let cnt=0
        quantities.map(v => 
            cnt += Math.ceil(v/mid)
        )

        return (cnt <= n)

    }

    while(lo< hi){
        let mid = Math.floor((lo + hi)/2)
        if (check(mid)){
            hi = mid
        }else{
            lo = mid + 1
        }
    }

    return lo
    
};