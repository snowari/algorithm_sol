function solution(distance, rocks, n) {
    var answer = 0;
    
    rocks =  rocks.sort((a,b)=> a-b)
    const diff = []
    diff.push(rocks[0])
    //console.log(rocks)
    for(let i=1; i<rocks.length-1; i++){
        diff[i] = rocks[i] - rocks[i-1]
    }
    diff.push(distance - rocks[rocks.length-1])
    
    let lo = Math.min(...diff)
    let hi =distance
    
    const check = (mid) => {
        let cnt = 0
        console.log(mid+"못 넘는거 삭제할거임")
        let prev=0
        let gap = rocks[0]
        for(let i=0; i<rocks.length; i++){
            if(rocks[i]-prev < mid){
                cnt ++
            }else{
                prev = rocks[i]
                
            }
        }
        if(distance-prev < mid){
            cnt++
        }
        
        console.log(cnt+"개 삭제하고 탈출~")
        return cnt <= n
    }
    
    while(lo< hi){
        let mid = Math.floor((lo+hi+1)/2)
        if(check(mid)){
            lo = mid
        }else{
            hi = mid - 1 
        }
    }
    
    return lo;
}