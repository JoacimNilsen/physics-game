export const calculateDistance = (x1, y1, x2, y2) => {
  const xDist = x2 - x1
  const yDist = y2 - y1
  
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

export const calculateWidth = (totalwidth, partials) => totalwidth / partials

export const updatePosition = p => {
  let [[px, py], [vx, vy]] = [p.position, p.velocity],
      position = [px+vx, py+vy]
  return {...p, position}
}