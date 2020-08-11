import { platform } from './platform'
import { particle } from './particle'
const
  canvas = document.querySelector('canvas'),
  context = canvas.getContext('2d'),
  ground = platform(innerHeight /1.5),
  startingPosition = [100, ground[0][1] - 17]
canvas.width = innerWidth
canvas.height = innerHeight

const makePlatform = () => {
  ground.map((point, index) => {
    let [x, y] = point
    if (index === 0) {
      context.beginPath();
      context.moveTo(x, y)
      return
    }
    context.lineTo(calculateWidth(canvas.width, x) * index, y)
    context.stroke()
  })
}

const calculateWidth = (totalwidth, partials) => totalwidth / partials


const ball = new particle(startingPosition)
  const renderBall = () => {
    context.beginPath()
    context.arc(ball.position[0], ball.position[1], 15, 0, Math.PI*2, false)
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
const log = () => {
  let date = new Date

}
const log2 = () => { console.log(context) }

animate(makePlatform)()
animate(renderBall)()


