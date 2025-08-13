// Remaining horizontal moves: dx - min(dx, dy)
// Remaining vertical moves: dy - min(dx, dy)

// time = diagonal_moves + leftover_moves
//      = min(dx, dy) + (max(dx, dy) - min(dx, dy))
//      = max(dx, dy)
// e.g.
// 	dx = 4 (4 steps in x direction)
// 	dy = 2 (2 steps in y direction)
// 	min(dx, dy) = 2 → 2 diagonal moves that cover both axes at once

// After those 2 diagonal moves:
// 	Horizontal steps left: dx - min(dx, dy) = 4 - 2 = 2
// 	Vertical steps left: dy - min(dx, dy) = 2 - 2 = 0
//
// Only 2 straight moves remain, which is
// max(dx, dy) - min(dx, dy) = 4 - 2 = 2

function minTimeToVisitAllPoints(points: [number, number][]): number {
  let time = 0;
  for (let i = 1; i < points.length; i++) {
    const current = points[i - 1];
    const target = points[i];
    const dx = target[0] - current[0];
    const dy = target[1] - current[1];
    const dMax = Math.abs(Math.max(dx, dy));
    time += dMax;
    console.log({ dMax, time });
  }

  return time;
}
const path1: [number, number][] = [
  [3, 2],
  [-2, 2],
];
const path2: [number, number][] = [
  [1, 1],
  [3, 4],
  [-1, 0],
];

console.log(`Result 1: ${minTimeToVisitAllPoints(path1)}`);
console.log(`Result 2: ${minTimeToVisitAllPoints(path2)}`);
