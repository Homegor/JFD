import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Quality from './qualitie'
import { useDispatch, useSelector } from 'react-redux'
import {
  getQualitiesById,
  getQualitiesLoadingStatus,
  loadQualitiesList
} from '../../../store/qualities'

const QualitiesList = ({ qualities }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getQualitiesLoadingStatus())
  const qualitiesList = useSelector(getQualitiesById(qualities))
  useEffect(() => {
    dispatch(loadQualitiesList())
  }, [])

  if (isLoading) return 'Loading...'

  return (
    <>
      {qualitiesList.map((item) => (
        <Quality key={item._id} {...item} />
      ))}
    </>
  )
}

QualitiesList.propTypes = {
  qualities: PropTypes.array.isRequired
}

export default QualitiesList
