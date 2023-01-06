let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let stop = document.querySelector('.stop')
let buttonSet = document.querySelector('.set')

play.addEventListener('click', function() {
  play.classList.add('hide')
  pause.classList.remove('hide')
})

pause.addEventListener('click', function() {
  pause.classList.add('hide')
  play.classList.remove('hide')
})

