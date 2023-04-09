import getRandomColor from './utils'
export default function initApp(){
    const defButton = document.createElement('button')
        defButton.className = 'button'
        defButton.textContent = 'Изменить цвет страницы'

    defButton.addEventListener('click', () => {
        const body = document.querySelector('body')
        body.style.background = getRandomColor()
    })

    document.body.prepend(defButton)
}