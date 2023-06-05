import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../../../api'
import { useHistory } from 'react-router-dom'
import Qualities from '../../ui/qualities'
const UserPageCard = ({ userId }) => {
  const [user, setUser] = useState()
  const history = useHistory()

  useEffect(() => {
    api.users.getById(userId).then((user) => setUser(user))
  }, [])

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
        Качества: <Qualities qualities={user.qualities} />
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