export const
  calculateDistance = ([x1, y1], [x2, y2]) => {
      const xDist = x2 - x1
      const yDist = y2 - y1
      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
  },

  //to determine out how wide to make a platform made of x points, we take the required width / points * index+1
  calculateWidth = (width, sections, index) =>
    (width / sections) * (index+1),

  //convert degrees to radians and the other way around
  degToRad = deg => 
      deg * Math.PI / 180,

  radToDeg = rad => 
      rad * 180 / Math.PI,

  //get the length of a vector
  magnitude = ([x, y]) =>
      Math.sqrt(x*x, y*y),

  //get the direction of a vector
  normalize = vector =>
      scale(vector, 1/magnitude(vector)||1),

  
  scale = ([x,y], n) =>
      [ n*x, n*y ],

  dot = ([x1, y1], [x2, y2]) =>
      x1*x2 + y1*y2,

  add = (...vx) => vx.reduce((a, v) => 
      [a[0]+v[0], a[1]+v[1]], [0, 0]),

  applyForce = (obj, mass, force) => {
    let { accel } = obj
    accel = add(scale(force, mass), accel)
    return {...obj, accel}
  }
      