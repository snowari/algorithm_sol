/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms) => {
    const n = rooms.length
    const visited = new Array(n).fill(false)

    let head = 0
    visited[0] = true
    const queue = [head]

    while(head < queue.length){
        const room = queue[head++]
        for(let key of rooms[room]){
            if( !visited[key]){
                visited[key] = true
                queue.push(key)
            }
        }
    }

    return visited.every(Boolean)
};