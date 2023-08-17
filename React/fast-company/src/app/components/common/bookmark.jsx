import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({ _id, status, onBookMark }) => {
  return (
    <i
      className={`bi bi-arrow-through-heart${status ? ' -fill' : ''}`}
      onClick={() => onBookMark(_id)}
    ></i>
  )
}

Bookmark.propTypes = {
  _id: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onBookMark: PropTypes.func.isRequired
}

export default Bookmark
