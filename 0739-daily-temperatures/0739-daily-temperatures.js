
const dailyTemperatures = (temperatures) => {
    const ans = Array(temperatures.length).fill(0)
    const stack = []

    for(const [day, temp] of temperatures.entries()){
        while(stack.length && stack.at(-1).temp < temp){
            const {day : prev_day} = stack.pop()
            ans[prev_day] = day - prev_day
        }
        stack.push({day, temp})
    }
    return ans
};