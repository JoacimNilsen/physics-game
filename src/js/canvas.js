const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight

const animate = (fn) => {
  let cb = () => {
    requestAnimationFrame(cb)
    fn()
  } 
  return cb
  // requestAnimationFrame(animate)
  // context.clearRect(0, 0, canvas.width, canvas.height)
}
const log = () =>{
  let date = new Date

} 
const log2 = () => console.log(new Date)

animate(log)()
animate(log2)()

