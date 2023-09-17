import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import qualitiesService from '../services/qualities.service'
import PropTypes from 'prop-types'

const QualitiesContext = React.createContext()

export const useQualities = () => {
  return useContext(QualitiesContext)
}

export const QualitiesProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true)
  const [qualities, setQualities] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])
  useEffect(() => {
    getQualitiesList()
  }, [])

  function errorCatcher(error) {
    const { message } = error.response.data
    setError(message)
  }
  function getQuality(id) {
    return qualities.find((p) => p._id === id)
  }

  async function getQualitiesList() {
    try {
      const { content } = await qualitiesService.get()
      setQualities(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }

  return (
    <QualitiesContext.Provider value={{ isLoading, qualities, getQuality }}>
      {children}
    </QualitiesContext.Provider>
  )
}

QualitiesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
