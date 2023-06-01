const startEl = document.querySelector('.data-start')
const stopEl = document.querySelector('.data-stop')
stopEl.setAttribute('disabled', true)
startEl.addEventListener('click', startRandomColor)


function startRandomColor() {
    startEl.setAttribute('disabled', true)
    stopEl.removeAttribute('disabled')
    const interval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
        stopEl.addEventListener('click', () => {
            stopEl.setAttribute('disabled', true)
    startEl.removeAttribute('disabled')
    clearInterval(interval)
      } )  
    }, 1000)
   
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}