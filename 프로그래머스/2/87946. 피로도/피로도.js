function solution(k, dungeons) {
    //최소 필요 , 소모 
    let answer = -1
    const visit = Array(dungeons.length).fill(false)
    const dfs = (k, cnt)=>{
        answer = Math.max(answer, cnt)
        for(let i=0; i<dungeons.length ; i++){
            if(!visit[i] && k >= dungeons[i][0]){
                visit[i] = true
                dfs(k-dungeons[i][1], cnt+1)
                visit[i] = false
            }
        }
        
    }
    dfs(k, 0)
    return answer
}