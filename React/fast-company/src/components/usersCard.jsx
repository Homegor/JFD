import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../api'
import { useHistory } from 'react-router-dom'

const UserPageCard = () => {
    const [user, setUser] = useState([])
    const history = useHistory()

    useEffect(() => {
        api.users.getById().then(user => setUser(user))
    }, [])

    if (!user) return <h1>Loader...</h1>

    const handleButton = () => {
        history.push('/')
    }

    return (
        <>
            <p>Имя:</p>
            <p>Профессия: </p>
            <p>Качества: </p>
            <p>Встретился, раз: </p>
            <p>Рейтинг: </p>
            <button onClick={handleButton}>На главную</button>
        </>
    )
}

UserPageCard.propTypes = {
    userId: PropTypes.string
}

export default UserPageCard
