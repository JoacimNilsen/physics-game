import { platform } from './platform'
import { particle } from './particle'
import { calculateWidth, applyForce} from './utils'

const canvas = document.querySelector('canvas'),
      context = canvas.getContext('2d'),
      ground = platform(innerHeight /1.5, 0, 40),
      goal = platform(100, 500, 10),
      startingPosition = [100, ground[0][1] - 30],
      sling = new particle([50, 50]),
      gravity = 1.5   
      sling.mass = 15

let ball = new particle(startingPosition)
ball.mass = 30,
      
canvas.width = innerWidth
canvas.height = innerHeight

const renderPlatform = (platform, width) => {
  platform.map((point, index) => {
    let [x, y] = point
    if (index === 0) {
      context.beginPath();
      context.moveTo(x, y) 
      return
    }
    let nextPoint = x+calculateWidth(width, platform.length, index)
    context.lineTo(nextPoint, y)
    context.stroke()
  })
}

const renderObject = (obj) => {
    context.beginPath()
    context.arc(
          obj.position[0],
          obj.position[1],
          obj.mass,
          0,
          Math.PI*2,
          false
    )
    context.fill()
    context.stroke()
    context.closePath()
}

  //update the position of the object by adding the velocity to the current position
  const updatePosition = (p, gravity) => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    let [[px, py], [vx, vy], [ax, ay]] = [p.position, p.velocity, p.accel]
    vy = (vy + ay) + gravity
    let position = [px+vx, py+vy],
    velocity = [vx, vy],
        accel = [0, 0]
    console.log(p, vy)
    return {...p, position, velocity, accel}
  }

const animate = (fn) => {
 
  let cb = () => {
    requestAnimationFrame(cb)
    fn()
  }
  return cb
}


animate(() => renderPlatform(ground, canvas.width))()
animate( () => renderPlatform(goal, 200))()
animate(() => ball = updatePosition(ball, gravity, context))()
animate(()=>renderObject(ball))()
animate(()=>renderObject(sling))()


