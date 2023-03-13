const IMG_URL = 'https://jsonplaceholder.typicode.com/photos'

const createIMG = (url, title, id) => {
    const liElement = document.createElement('li')
        liElement.className = 'photo-item'
    const imgElement = document.createElement('img')
        imgElement.className = 'photo-item__image'
        imgElement.src = url // .url
    const idElrment = document.createElement('h2')
        idElrment.className = 'photo-item__id'
        idElrment.textContent = id
    const h3Element = document.createElement('h3')
        h3Element.className = 'photo-item__title'
        h3Element.textContent = title // .title
    liElement.append(imgElement, h3Element, idElrment)

    return liElement
}
const getLoaderImg = () => {
    const loader = document.querySelector('#loader')
    const hidden = loader.hasAttribute('hidden')
    if(hidden){
        loader.removeAttribute('hidden')
    }else{
        loader.setAttribute('hidden', '')
    }
}

const dataContainer = document.querySelector('#data-container')

const getFastestLoadedPhoto = (ides) => {
    getLoaderImg()
    const requests = ides.map((id) => fetch(`${IMG_URL}/${id}`))
    Promise.race(requests)
        .then((response) => {
            return response.json()
        })
        .then((imgId) => {
                const imgHTML = createIMG(imgId.url, imgId.id,imgId.title)
                dataContainer.append(imgHTML)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            getLoaderImg()
        })
}

getFastestLoadedPhoto([60, 12, 55])