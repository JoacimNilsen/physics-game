import { platform } from './platform'
import { particle } from './particle'
import { calculateWidth, applyForce, calculateDistance, magnitude} from './utils'


const canvas = document.querySelector('canvas'),
      context = canvas.getContext('2d'),
      ground = platform(innerHeight /1.5, 0,50, 1),
      goal = platform(100, 500, 10),
      startingPosition = [100, ground.vectors[0][1] - 200],
      sling = new particle([50, 50]),
      gravity = 1
    

let ball = new particle(startingPosition), paths

sling.mass = 15
ball.mass = 1
ball.radius = 5

      
canvas.width = innerWidth
canvas.height = innerHeight

const renderPlatform = (platform, width) => {
  let path = new Path2D()
  platform.vectors.map((point, index) => {
    let [x, y] = point
    if (index === 0) {
      context.beginPath();
      path.moveTo(x, y) 
      return
    }
    let nextPoint = x+calculateWidth(width, platform.vectors.length, index)
    path.lineTo(nextPoint, y)
  })
  context.stroke(path)
  path.closePath()
  paths = path
}

const renderObject = (obj) => {
    context.beginPath()
    context.arc(
          obj.position[0],
          obj.position[1],
          obj.radius,
          0,
          Math.PI*2,
          false
    )
    context.fill()
    context.closePath()
    context.stroke()
}


const detectCollision = p => {
  console.log(context.isPointInPath(p.position[0], p.position[1], "nonzero"))
    ground.vectors.forEach(point => {
        let [vx, vy] = p.velocity
        // if(p.position[1]+p.radius*Math.PI > point[1]){
        //     vy = -gravity
        //     p = applyForce(p, p.mass, [vx, vy])
        //     return
        // } 
        if(p.position[1] === point[1]) {
        vy *= -1
        p = applyForce(p, p.mass, [vx, vy])
      }
    })
  return p
  
}

  //update the position of the object by adding the velocity to the current position
  const updatePosition = (p, gravity) => {
    p = detectCollision(p)

    context.clearRect(0, 0, canvas.width, canvas.height)
    let [[px, py], [vx, vy], [ax, ay]] = [p.position, p.velocity, p.accel]
    vy = (vy + ay) + 1
    vx = (vx + ax)
    let position = [px+vx, py+vy],
        velocity = [vx, vy],
        accel = [0, 0]
    return {...p, position, velocity, accel}
  }

const animate = (fn) => {
 
  let cb = () => {
    requestAnimationFrame(cb)
    fn()
  }
  return cb
}

renderPlatform(ground, canvas.width)

animate(() => ball = updatePosition(ball, ground.mass))()
// animate( () => renderPlatform(goal, 200))()
animate(()=>renderObject(ball))()
animate(()=>renderObject(sling))()


