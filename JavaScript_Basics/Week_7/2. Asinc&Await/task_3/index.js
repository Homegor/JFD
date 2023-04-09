const URL = 'https://jsonplaceholder.typicode.com/albums'

const createAlbum = (name) => {
    const liElement = document.createElement('li')
        liElement.textContent = name

    return liElement
}
const getLoader = () => {
    const loader = document.querySelector('#loader')
    const hidden = loader.hasAttribute('hidden')
    if(hidden){
        loader.removeAttribute('hidden')
    }else{
        loader.setAttribute('hidden', '')
    }
}

const dataContainer = document.querySelector('#data-container')

const renderAlbums = async () => {
    try {
        getLoader()
        const response = await fetch(URL)
        if(!response.ok){
            throw new Error('Произошла ошибка в получении данных об альбомах...')
        }
        const nameAlbum = await response.json()
        const allName = await nameAlbum.forEach((album) => {
            const toggleHTML = createAlbum(album.title)
            dataContainer.append(toggleHTML)
        })
        console.log(allName)
    }catch (error){
        console.log("error", error);
    }finally {
        getLoader()
    }
}

const result = renderAlbums()
console.log(result)