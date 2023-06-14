import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import api from '../../../api'
import Qualities from '../../ui/qualities'
const UserPageCard = ({ userId }) => {
  console.log(userId)
  const [user, setUser] = useState()
  const history = useHistory()

  useEffect(() => {
    api.users.getById(userId).then((user) => setUser(user))
  }, [])

  if (!user) return <h1>Loader...</h1>

  const handleButton = () => {
    history.push('/users')
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
        Пол <strong>{user.sex}</strong>
      </p>
      <p>
        Рейтинг: <strong>{user.rate}</strong>
      </p>
      <button className={'m-1 btn btn-primary'} onClick={handleButton}>
        Все пользователи
      </button>
      <Link
        className={'m-1 btn btn-danger'}
        to={`/users/${userId}/edit`}
        user={user}
      >
        Изменить пользователя
      </Link>
    </>
  )
}

UserPageCard.propTypes = {
  userId: PropTypes.string
}

export default UserPageCard
