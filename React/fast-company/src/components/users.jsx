import React from 'react'
import User from './user'
import PropTypes from 'prop-types'

const Users = ({ onDelete, onBookMark, userCrop }) => {
    return (
        <>
            {userCrop.map(item => (
                <User {...item} key={item._id} onDelete={onDelete} onBookMark={onBookMark} />
            ))}
        </>
    )
}

Users.protoTypes = {
    onDelete: PropTypes.func.isRequired,
    onBookMark: PropTypes.func.isRequired,
    userCrop: PropTypes.func.isRequired
}

export default Users
