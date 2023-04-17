import React from 'react'

const BookMark = ({ _id, status, onBookMark }) => {
    return <i className={`bi bi-arrow-through-heart${status ? '-fill' : ''}`} onClick={() => onBookMark(_id)}></i>
}

export default BookMark
