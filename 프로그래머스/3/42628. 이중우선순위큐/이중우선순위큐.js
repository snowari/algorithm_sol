function solution(operations) {
  const top = [];

  for (const oper of operations) {
    const [code, numStr] = oper.split(" ");
    const num = Number(numStr);

    if (code === "I") {
      top.push(num);
    } else if (code === "D") {
      if (top.length === 0) continue;

      if (num < 0) {
        const minNum = Math.min(...top);
        const index = top.indexOf(minNum);
        top.splice(index, 1);
      } else if (num > 0) {
        const maxNum = Math.max(...top);
        const index = top.indexOf(maxNum);
        top.splice(index, 1);
      }
    }
  }

  if (top.length === 0) {
    return [0, 0];
  }

  return [Math.max(...top), Math.min(...top)];
}