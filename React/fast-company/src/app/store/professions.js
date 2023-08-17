import { createSlice } from '@reduxjs/toolkit'
import professionsService from '../services/profession.service'

const professionsSlice = createSlice({
  name: 'professions',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    professionsRequested: (state) => {
      state.isLoading = true
    },
    professionsReceived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    professionsRequestFiled: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: professionsReducer, actions } = professionsSlice
const { professionsRequested, professionsReceived, professionsRequestFiled } =
  actions

function isOutDated(date) {
  return Date.now() - date > 10 * 60 * 1000
}

export const loadProfessionsList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().professions
  if (isOutDated(lastFetch)) {
    dispatch(professionsRequested())
    try {
      const { content } = await professionsService.get()
      dispatch(professionsReceived(content))
    } catch (error) {
      dispatch(professionsRequestFiled(error.message))
    }
  }
}
export const getProfessions = () => (state) => state.professions.entities
export const getProfessionsLoadingStatus = () => (state) =>
  state.professions.isLoading

export const getProfessionsById = (professionsId) => (state) => {
  state.professions.entities.find((p) => p._id === professionsId)
}
export default professionsReducer
