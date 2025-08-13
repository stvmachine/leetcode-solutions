function minTimeToVisitAllPoints(points: [number, number][]): number {
  let time = 0;
  for (let i = 1; i < points.length; i++) {
    const current = points[i - 1];
    const target = points[i];
    const dx = Math.abs(target[0] - current[0]);
    const dy = Math.abs(target[1] - current[1]);
    const dMax = Math.max(dx, dy);
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
