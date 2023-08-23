import React, { useEffect } from 'react'
import { orderBy } from 'lodash'

import CommentList from '../common/comments/commentList'
import AddCommentForm from '../common/comments/addCommentForm'
// import { useComments } from '../../hooks/useComments'
import { useDispatch, useSelector } from 'react-redux'
import {
  createComments,
  deleteComments,
  getComments,
  getCommentsLoadingStatus,
  loadCommentsList
} from '../../store/comments'
import { useParams } from 'react-router-dom'

const Comments = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const comments = useSelector(getComments())
  const isLoading = useSelector(getCommentsLoadingStatus())
  // const { createComments, deleteComment } = useComments()

  const handleSubmit = (data) => {
    dispatch(createComments(data, userId))
  }

  const handleRemoveComment = (id) => {
    dispatch(deleteComments(id))
  }

  useEffect(() => {
    dispatch(loadCommentsList(userId))
  }, [userId, dispatch])

  const sortedComments = orderBy(comments, ['created_at'], ['desc'])

  return (
    <>
      <div className='card mb-2'>
        <div className='card-body '>
          <AddCommentForm onSubmit={handleSubmit} />
        </div>
      </div>
      {sortedComments.length > 0 && (
        <div className='card mb-3'>
          <div className='card-body '>
            <h2>Comments</h2>
            <hr />
            {!isLoading ? (
              <CommentList
                comments={sortedComments}
                onRemove={handleRemoveComment}
              />
            ) : (
              'Loading...'
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Comments
