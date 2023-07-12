import React from 'react'
import PropTypes from 'prop-types'
import Quality from './qualitie'
import { useQualities } from '../../../hooks/useQualities'

const QualitiesList = ({ qualities }) => {
  const { loading } = useQualities()

  if (loading) return 'Loading...'
  return (
    <>
      {qualities.map((item) => (
        <Quality key={item} id={item} />
      ))}
    </>
  )
}

QualitiesList.propTypes = {
  qualities: PropTypes.array.isRequired
}

export default QualitiesList
