import React from 'react'
import PropTypes from 'prop-types'
import { useQualities } from '../../../hooks/useQualities'
const Quality = ({ id }) => {
  const { isLoading, getQuality } = useQualities()
  const quality = getQuality(id)

  if (!isLoading) {
    return (
      <span className={`badge m-2 bg-${quality.color}`}>{quality.name}</span>
    )
  } else {
    return 'Loading...'
  }
}

Quality.propTypes = {
  id: PropTypes.string
}
export default Quality
