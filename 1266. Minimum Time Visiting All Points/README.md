# Intuition
At first, I considered simulating the movement step-by-step:
always moving diagonally when possible (since a diagonal covers both an x and y step in a single second), then moving horizontally or vertically if one coordinate is already aligned.

However, after implementing this, I realized the number of diagonal moves between two points can be computed directly.
The maximum number of diagonal moves you can make is `min(dx, dy)`, where:

```
dx = |x₂ - x₁|
dy = |y₂ - y₁|
```

because each diagonal move reduces both dx and dy by 1.

Once diagonal moves are done, the only remaining moves are straight (horizontal or vertical), which is simply the difference between the larger and smaller distance. That leftover is:

`max(dx, dy) - min(dx, dy)`


# Approach

For each consecutive pair of points:
1.	Compute dx and dy as the absolute differences in x and y.
2.	The minimum time to move between them is:
```
time = min(dx, dy) + (max(dx, dy) - min(dx, dy))
     = max(dx, dy)
```
3.	Sum these times over all pairs of points.

This works because:
	•	Diagonal moves cover both axes at once.
	•	Straight moves are only needed when one axis is already aligned.
	•	Therefore, total time is determined solely by the longer of dx or dy.

```
[x1, y1] = [0, 0]
[x2, y2] = [4, 2]

dx = 4
dy = 2
min(dx, dy) = 2 → 2 diagonal moves
Leftover = max(dx, dy) - min(dx, dy) = 4 - 2 = 2
Total time = 2 + 2 = 4
```

# Complexity
- Time complexity: O(n), we process each consecutive pair of points once.

# Code
```typescript []
function minTimeToVisitAllPoints(points: [number, number][]): number {
   let time = 0;
   for(let i=1; i< points.length; i++){
    const current = points[i-1];
    const target = points[i];
    const dx = Math.abs(target[0] - current[0]);
    const dy = Math.abs(target[1] - current[1]);
    const dMax = Math.max(dx,dy);
    time+=dMax;
    console.log({dMax, time});
   }

   return time;
}

```