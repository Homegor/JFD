import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import userService from '../services/user.service'
import { toast } from 'react-toastify'

const UseContext = React.createContext()

export const useUser = () => {
  return useContext(UseContext)
}

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])
  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])
  async function getUsers() {
    try {
      const { content } = await userService.get()
      setUsers(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }
  function errorCatcher(error) {
    const { message } = error.response.data
    setError(message)
  }
  function getUserById(userId) {
    return users.find((u) => u._id === userId)
  }
  return (
    <UseContext.Provider value={{ users, getUserById }}>
      {!isLoading ? children : 'Loading...'}
    </UseContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default UserProvider
