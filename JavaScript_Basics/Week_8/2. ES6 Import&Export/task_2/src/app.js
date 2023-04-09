export default function initApp(){
    const cookieWindow = document.querySelector('.cookie-consent')
    const clearButton = document.querySelector('.cookie-consent__button')

    const hideClass = 'hide'

    switch (localStorage.getItem('newClass')){
        case hideClass: cookieWindow.classList.toggle(hideClass)
    }

    clearButton.addEventListener('click', ()=> {
        cookieWindow.classList.toggle(hideClass)

        if (cookieWindow.classList.contains(hideClass)){
            localStorage.setItem('newClass', hideClass)
        }
    })
}