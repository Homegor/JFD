import { createSlice } from '@reduxjs/toolkit'
import qualitiesService from '../services/qualities.service'

const qualitiesSlice = createSlice({
  name: 'qualities',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    qualitiesRequested: (state) => {
      state.isLoading = true
    },
    qualitiesReceived: (state, action) => {
      state.entities = action.payload
      state.lastFetch = Date.now()
      state.isLoading = false
    },
    qualitiesRequestFiled: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: qualitiesReducer, actions } = qualitiesSlice
const { qualitiesRequested, qualitiesReceived, qualitiesRequestFiled } = actions

function isOutDated(date) {
  return Date.now() - date > 10 * 60 * 1000
}

export const loadQualitiesList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().qualities
  if (isOutDated(lastFetch)) {
    console.log(lastFetch)
    dispatch(qualitiesRequested())
    try {
      const { content } = await qualitiesService.get()
      dispatch(qualitiesReceived(content))
    } catch (error) {
      dispatch(qualitiesRequestFiled(error.message))
    }
  }
}

export const getQualities = () => (state) => state.qualities.entities
export const getQualitiesLoadingStatus = () => (state) =>
  state.qualities.isLoading
export const getQualitiesById = (qualitiesIds) => (state) => {
  if (state.qualities.entities) {
    const qualitiesArray = []
    for (const qualId of qualitiesIds) {
      for (const qualiti of state.qualities.entities) {
        if (qualiti._id === qualId) {
          qualitiesArray.push(qualiti)
          break
        }
      }
    }
    return qualitiesArray
  }
  return []
}

export default qualitiesReducer
