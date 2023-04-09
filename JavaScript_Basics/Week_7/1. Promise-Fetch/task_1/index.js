const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

function createUser(text){
    const liElement = document.createElement('li')
    const aElement = document.createElement('a')
    aElement.href = '#'
    aElement.textContent = text
    liElement.append(aElement)

    console.log('aElement', aElement)
    return liElement
}
function getLoaderUser(){
    const loader = document.querySelector('#loader')
    const hidden = loader.hasAttribute('hidden')
    if(hidden){
        loader.removeAttribute('hidden')
    }else{
        loader.setAttribute('hidden', '')
    }
}

const dataContainer = document.querySelector('#data-container')

function getAllUsers(){
    getLoaderUser()
    const getURL = fetch(USERS_URL, {
        method: 'GET'
    })
    getURL
        .then((response) => {
            console.log('response', response)
            if(!response){
                throw new Error('Ошибка запроса')
            }
            return response.json()
        })
        .then((users) => {
            users.forEach((user) => {
                const userHTML = createUser(user.name)
                dataContainer.append(userHTML)
            })
        })
        .catch((error) => {
            console.error('error', error)
        })
        .finally(() => {
            getLoaderUser()
        })
}

getAllUsers()