const dailyTemperatures = (temperatures) => {
    const ans = new Array(temperatures.length).fill(0);
    const stack = [];

    for (const [i, temp] of temperatures.entries()) {
        while (stack.length && temp > temperatures[stack.at(-1)]) {
            const idx = stack.pop();
            ans[idx] = i - idx;
        }
        stack.push(i);
    }

    return ans;
};