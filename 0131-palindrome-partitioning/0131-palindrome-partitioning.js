/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const answer = []
    
    
    const dfs = (start , current) => {
        if(start === s.length){
            answer.push([...current])
            return
        }

        for(let end = start + 1 ; end <= s.length ; end++){
            const sub = s.slice(start, end)
            if ( sub === sub.split('').reverse().join('')){
                current.push(sub)
                dfs(end, current)
                current.pop()
            }

        }
    }

    dfs(0, [])
    return answer
};