function minTimeToVisitAllPoints(points: [number, number][]): number {
  let time = 0;

  for (let step = 1; step < points.length; step++) {
    const target = points[step] as [number, number];
    let current = points[step - 1] as [number, number];
    
    console.log(`Starting point: [${current}]`);

    while ((current[0] !== target[0] || current[1] !== target[1])) {
      // move diagonally up-right +1, +1
      if (current[0] < target[0] && current[1] < target[1]) {
        current = [current[0] + 1, current[1] + 1];
      }
      // move diagonally up-left -1, +1
      else if (current[0] > target[0] && current[1] < target[1]) {
        current = [current[0] - 1, current[1] + 1];
      }
      // move diagonally down-right +1, -1
      else if (current[0] < target[0] && current[1] > target[1]) {
        current = [current[0] + 1, current[1] - 1];
      }
      // move diagonally down-left -1, -1
      else if (current[0] > target[0] && current[1] > target[1]) {
        current = [current[0] - 1, current[1] - 1];
      }
      // move horizontally right +1, 0
      else if (current[0] < target[0] && current[1] === target[1]) {
        current = [current[0] + 1, current[1]];
      }
      // move horizontally left -1, 0
      // 3,2 <=> 2,2/ 1,2 / 0,2 / -1,2/ -2,2
      else if (current[0] > target[0] && current[1] === target[1]) {
        current = [current[0] - 1, current[1]];
      }
      // move vertically up +1, 0
      else if (current[0] === target[0] && current[1] < target[1]) {
        current = [current[0], current[1] + 1];
      }
      // move vertically down -1, 0
      else if (current[0] === target[0] && current[1] > target[1]) {
        current = [current[0], current[1] - 1];
      }

      console.log(current);
      time += 1;
    }
  }

  return time;
}

const path1: [number, number][]= [[3,2],[-2,2]];
const path2: [number, number][] = [[1,1],[3,4],[-1,0]];

console.log(`Result 1: ${minTimeToVisitAllPoints(path1)}`);
console.log(`Result 2: ${minTimeToVisitAllPoints(path2)}`);

