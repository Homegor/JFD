import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
  getProfessionsById,
  getProfessionsLoadingStatus
} from '../../store/professions'

const Profession = ({ id }) => {
  const isLoading = useSelector(getProfessionsLoadingStatus())

  if (isLoading) {
    const professions = useSelector(getProfessionsById(id))

    return <p>{professions.name}</p>
  } else return 'Loading...'
}
Profession.propTypes = {
  id: PropTypes.string
}
export default Profession
