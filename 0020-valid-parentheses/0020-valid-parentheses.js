const isValid =(s)=>{
    const stack=[]
    const map = {
        '{' : '}',
        '(' : ')',
        '[' : ']',
    }

    for(const char of s){
        if(map[char]){
            stack.push(map[char])
        }else if(stack.at(-1) === char){
            stack.pop()
        }else
            return false
    }

    return stack.length === 0 
}