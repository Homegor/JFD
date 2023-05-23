import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../api'
import { useHistory } from 'react-router-dom'
import QualitiesList from './qualitiesList'

const UserPageCard = ({ userId }) => {
    console.log('userId', userId)
    const [user, setUser] = useState()
    const history = useHistory()

    useEffect(() => {
        api.users.getById(userId).then(user => setUser(user))
    }, [])

    console.log('user', user)

    if (!user) return <h1>Loader...</h1>

    const handleButton = () => {
        history.push('/')
    }
    return (
        <>
            <p>
                ФИО: <strong>{user.name}</strong>
            </p>
            <p>
                Профессия: <strong>{user.profession.name}</strong>
            </p>
            <p>
                Качества: <QualitiesList qualities={user.qualities} />
            </p>
            <p>
                Встретился <strong>{user.completedMeetings}</strong> раз
            </p>
            <p>
                Рейтинг: <strong>{user.rate}</strong>
            </p>
            <button onClick={handleButton}>На главную</button>
        </>
    )
}

UserPageCard.propTypes = {
    userId: PropTypes.string
}

export default UserPageCard
