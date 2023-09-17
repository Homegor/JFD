import { createAction, createSlice } from '@reduxjs/toolkit'
import commentsService from '../services/comment.service'

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    commentsRequested: (state) => {
      state.isLoading = true
    },
    commentsReceived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    commentsRequestFiled: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    commentsCreate: (state, actions) => {
      state.entities.push(actions.payload)
    },
    commentsRemove: (state, actions) => {
      state.entities = state.entities.filter((c) => c._id !== actions.payload)
    }
  }
})

const { reducer: commentsReducer, actions } = commentsSlice
const {
  commentsRequested,
  commentsReceived,
  commentsRequestFiled,
  commentsCreate,
  commentsRemove
} = actions

const createCommentsRequested = createAction(
  '/comments/createCommentsRequested'
)
const deleteCommentsRequested = createAction(
  '/comments/deleteCommentsRequested'
)

export const loadCommentsList = (userId) => async (dispatch) => {
  dispatch(commentsRequested())
  try {
    const { content } = await commentsService.getComments(userId)
    dispatch(commentsReceived(content))
  } catch (error) {
    dispatch(commentsRequestFiled(error.message))
  }
}
export const createComments = (payload) => async (dispatch) => {
  dispatch(createCommentsRequested())
  try {
    const { content } = await commentsService.createComment(payload)
    dispatch(commentsCreate(content))
  } catch (error) {
    dispatch(commentsRequestFiled(error.message))
  }
}
export const deleteComments = (id) => async (dispatch) => {
  dispatch(deleteCommentsRequested())
  try {
    const { content } = await commentsService.removeComments(id)
    if (content === null) {
      dispatch(commentsRemove(id))
    }
  } catch (error) {
    dispatch(commentsRequestFiled(error.message))
  }
}
export const getComments = () => (state) => state.comments.entities
export const getCommentsLoadingStatus = () => (state) =>
  state.comments.isLoading

export default commentsReducer
