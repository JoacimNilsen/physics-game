import { platform } from './platform'

const
  canvas = document.querySelector('canvas'),
  context = canvas.getContext('2d'),
  ground = platform(innerHeight /1.5)
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


