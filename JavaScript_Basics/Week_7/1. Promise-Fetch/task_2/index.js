const USERSID_URL = 'https://jsonplaceholder.typicode.com/users'

function createUserId(text){
    const liElement = document.createElement('li')
    const aElement = document.createElement('a')
    aElement.href = '#'
    aElement.textContent = text

    liElement.append(aElement)
    return liElement
}
function getLoaderId(){
    const loader = document.querySelector('#loader')
    const hidden = loader.hasAttribute('hidden')
    if(hidden){
        loader.removeAttribute('hidden')
    }else{
        loader.setAttribute('hidden', '')
    }
}

const dataContainer = document.querySelector('#data-container')

const getUsersByIds = (ides) => {
    getLoaderId()
    const requests = ides.map((id) => fetch(`${USERSID_URL}/${id}`))
    Promise.all(requests)
        .then((responses) => {
            const dataResult = responses.map((response) => response.json())
            return Promise.all(dataResult)
        })
        .then((dataId) => {
            dataId.forEach((users) => {
                const dataHTML = createUserId(users.username)
                dataContainer.append(dataHTML)
            })
        })
        .catch((error) => {
            console.log('error', error)
        })
        .finally(() => {
            getLoaderId()
        })

}

getUsersByIds([5, 6, 2, 1]);