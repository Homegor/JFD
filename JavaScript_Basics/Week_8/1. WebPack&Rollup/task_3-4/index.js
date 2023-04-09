import "./index.css";
import first_images from './src/assets/logo.png';


//DOM
const isTitleHTML = document.createElement('h1')
isTitleHTML.textContent = 'Welcome to' + ' Webpack:)'.toUpperCase()
const isImgHTML = document.createElement('img')
isImgHTML.className = 'images__title'
isImgHTML.src = first_images

document.body.prepend(isTitleHTML, isImgHTML);

