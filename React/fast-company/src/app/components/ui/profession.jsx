import React from 'react'
import { useProfessions } from '../../hooks/useProfession'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const Profession = ({ id }) => {
  const { isLoading, getProfession } = useProfessions()
  const prof = getProfession(id)
  if (!isLoading) {
    return <p>{prof.name}</p>
  } else return 'Loading...'
}
Profession.propTypes = {
  id: PropTypes.string
}
export default Profession
