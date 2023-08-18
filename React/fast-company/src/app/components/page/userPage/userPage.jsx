import React from 'react'
import PropTypes from 'prop-types'

import UserCard from '../../ui/userCard'
import QualitiesCard from '../../ui/qualitiesCard'
import MeetingsCard from '../../ui/meetingsCard'
import Comments from '../../ui/comments'
import { CommentsProvider } from '../../../hooks/useComments'
import { useSelector } from 'react-redux'
import { getUserById } from '../../../store/users'
const UserPageCard = ({ userId }) => {
  const user = useSelector(getUserById(userId))

  if (!user) return <h1>Loader...</h1>

  return (
    <div className='row gutters-sm'>
      <div className='col-md-4 mb-3'>
        <UserCard user={user} />
        <QualitiesCard data={user.qualities} />
        <MeetingsCard value={user.completedMeetings} />
      </div>

      <div className='col-md-8'>
        <CommentsProvider>
          <Comments />
        </CommentsProvider>
      </div>
    </div>
  )
}

UserPageCard.propTypes = {
  userId: PropTypes.string
}

export default UserPageCard
