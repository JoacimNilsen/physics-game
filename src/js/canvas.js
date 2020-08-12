import { platform } from './platform'
import { particle } from './particle'
import {updatePosition, calculateWidth, calculateDistance} from './utils'

const canvas = document.querySelector('canvas'),
      context = canvas.getContext('2d'),
      ground = platform(innerHeight /1.5, 0, 40),
      goal = platform(100, 500, 10),
      startingPosition = [100, ground[0][1] - 30],
      ball = new particle(startingPosition)
      ball.mass = 30;

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
    let nextPoint = x+calculateWidth(width, platform.length) * index;
    context.lineTo(nextPoint, y)
    context.stroke()
  })
}

const renderBall = () => {
    context.beginPath()
    context.arc(
          ball.position[0],
          ball.position[1],
          ball.mass,
          0,
          Math.PI*2,
          false
    )
    context.fill()
    context.stroke()
    context.closePath()
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
animate(() => updatePosition(ball))()
animate(renderBall)()


