/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    answer =0
    stack = []
    while(n>0){
        stack.push(n%2)
        if(n/2 < 2){
            stack.push(Math.floor(n/2))
            break
        }
        n= Math.floor(n/2)
    }

    console.log(stack)
    stack.forEach(bit => {
        if (bit === 1) {
            answer++
        }
    })

    return answer
};