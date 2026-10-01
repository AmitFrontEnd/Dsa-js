const orangesRotting = grid => {
  let queue = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0])
      }
    }
  }
  let minMinutes = 0
  while (queue.length) {
    let [i, j, minutes] = queue.shift()
    // left
    if (j > 0 && grid[i][j - 1] === 1) {
      grid[i][j - 1] = 2
      queue.push([i, j - 1, minutes + 1])
    }
    // right
    if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
      grid[i][j + 1] = 2
      queue.push([i, j + 1, minutes + 1])
    }
    // top
    if (i > 0 && grid[i - 1][j] === 1) {
      grid[i - 1][j] = 2
      queue.push([i - 1, j, minutes + 1])
    }
    //bottom
    if (i < grid.length - 1 && grid[i + 1][j] === 1) {
      grid[i + 1][j] = 2
      queue.push([i + 1, j, minutes + 1])
    }
    minMinutes = minutes > minMinutes ? minutes : minMinutes

  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        return -1
      }
    }
  }
  return minMinutes
};

console.log(orangesRotting([[2, 1, 1, 0, 2], [1, 1, 0, 1, 1], [0, 1, 0, 1, 0], [2, 1, 1, 1, 1]]))