function solution(n, times) {
    var answer = 0;
    
    let lo = Math.min(...times)
    let hi = Math.max(...times)*n
    
    times = times.sort((a,b)=> a-b) // 심사 빠른 순서대로 정렬
    
    const check = (mid) => {
        //이 시간안에 가능?
        let cnt = 0
        for(const t of times){
            cnt = cnt + Math.floor(mid/t)//t사람이 이 시간에 처리할 수 있는 사람 수
        }
        
        return (cnt >=n)
    }
    
    
    while(lo < hi){
        let mid = Math.floor((lo + hi)/2)
        if(check(mid)){
            hi = mid
        }else{
            lo = mid + 1
        }
        
    
    }
    return lo
    
    //return answer;
}