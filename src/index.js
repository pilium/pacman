import Enemy from './pers/enemy'
import powerdot from './pers/powerdot'
import player from './pers/player'
import render from './libs/render'

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

const image = new Image()
image.src = 'img/pac.png'
image.onload = () => {
  window.addEventListener('resize', resizeCanvas, false)
  resizeCanvas()
}

const enemy = Enemy()

let data = {
    pscore: 0,
    gscore: 0
  }
  
const resizeCanvas = () => {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    data = render(ctx, canvas, player, enemy, powerdot, data.pscore, data.gscore, image)
    requestAnimationFrame(resizeCanvas)
}

document.body.appendChild(canvas)