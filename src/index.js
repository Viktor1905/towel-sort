
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const result = [];
    if(matrix) {
        matrix.map((item, index) => {
            if (index % 2 !== 0) {
                item.reverse().map((item) => result.push(item))
            } else {
                item.map((item) => result.push(item))
            }
        })
    }
    return result
}
