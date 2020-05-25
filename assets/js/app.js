let menu = document.getElementById('menu')
let nav = document.getElementById('nav')
let exit = document.getElementById('exit')

menu.addEventListener('click', (e) => {
  nav.classList.toggle('hide-mobile')
  e.preventDefault()
})

exit.addEventListener('click', (e) => {
  nav.classList.add('hide-mobile')
  e.preventDefault()
})