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

}

animate();
