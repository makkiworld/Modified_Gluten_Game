function init() {
  // Change these emoji to whatever you want!
  const foods = ['🍞', '🌾', '🥖', '🥐']

  const pandaFace = document.querySelector('.panda_face')
  const button = document.querySelector('button')
  const cover = document.querySelector('.cover')
  let pos = pandaFace.getBoundingClientRect()
  let canClick = true

  const moveFood = target => {
    target.style.transition = '10s'
    const randomTop = Math.ceil(Math.random() * 100)
    target.style.zIndex = randomTop
    target.style.top = `${randomTop}%`
    target.style.left = `${Math.ceil(Math.random() * 100)}%`
  }

  const createFood = () => {
    const food = document.createElement('div')
    food.classList.add('panda')
    food.textContent = foods[Math.floor(Math.random() * foods.length)]
 food.style.top = `${pos.y + pos.height / 2 - 22}px`
    food.style.left = `${pos.x + pos.width / 2 - 22 - 60}px`
      cover.appendChild(food)

    setTimeout(() => {
      food.style.left = `${pos.x > 300 ? pos.x - 300 : 50}px`
    }, 40)

    setTimeout(() => {
      moveFood(food)
      setInterval(() => moveFood(food), 4000)
    }, 2000)
  }

  const trigger = () => {
    if (!canClick) return
    canClick = false
    pos = pandaFace.getBoundingClientRect()
    button.classList.add('animate')

    setTimeout(() => {
      createFood()
      setTimeout(() => {
        button.classList.remove('animate')
        canClick = true
      }, 1200)
    }, 560)
  }

  button.addEventListener('click', trigger)
  window.addEventListener('resize', () => pos = pandaFace.getBoundingClientRect())
}

window.addEventListener('DOMContentLoaded', init)



