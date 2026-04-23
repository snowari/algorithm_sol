function solution(relation) {
    var answer = 0;
    const cols = relation[0].length
    const rows = relation.length
    
    const candidates= []
    
    const isCandidate= (mask) => {
        const keys = new Set(
         relation.map(row => {
           return Array.from({length : cols }, (_, i) => i)
                .filter(i=> mask & (1<<i))
                .map(i => row[i])
                .join(',')
        }))
        
        
        return rows == keys.size
        //console.log(keys)
        
        
    }
    const isMinimal = (mask) => {
        return candidates.every(c=> (c & mask)!== c)
        
    }
    
    for(let mask= 1; mask<(1<<cols) ; mask++ ){
        if(isCandidate(mask) && isMinimal(mask)){
            candidates.push(mask)
        }
    }
    
    answer = candidates.length
    return answer
}
