import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import api from '../../../api'
import UserCard from '../../ui/userCard'
import QualitiesCard from '../../ui/qualitiesCard'
import MeetingsCard from '../../ui/meetingsCard'
import Comments from '../../ui/comments'
const UserPageCard = ({ userId }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    api.users.getById(userId).then((user) => setUser(user))
  }, [])

  if (!user) return <h1>Loader...</h1>

  return (
    <div className='row gutters-sm'>
      <div className='col-md-4 mb-3'>
        <UserCard user={user} />
        <QualitiesCard data={user.qualities} />
        <MeetingsCard value={user.completedMeetings} />
      </div>

      <div className='col-md-8'>
        <Comments />
      </div>
    </div>
  )
}

UserPageCard.propTypes = {
  userId: PropTypes.string
}

export default UserPageCard
