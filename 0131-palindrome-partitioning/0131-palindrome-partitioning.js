/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const answer = []

    const isPalindrome = (s) => {
        let left = 0, right = s.length-1
        while(left<right){
            if(s[left]!= s[right]){
                return false
            }
            left ++
            right --
        }
        return true
    }
    
    
    const dfs = (start , current) => {
        if(start === s.length){
            answer.push([...current])
            return
        }

        for(let end = start + 1 ; end <= s.length ; end++){
            const sub = s.slice(start, end)
            if ( isPalindrome(sub)){
                current.push(sub)
                dfs(end, current)
                current.pop()
            }

        }
    }

    dfs(0, [])
    return answer
};