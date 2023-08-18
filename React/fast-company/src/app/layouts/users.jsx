import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import UserPage from '../components/page/userPage'
import UsersListPage from '../components/page/usersListPage'
import UserProvider from '../hooks/useUsers'
import EditUserPage from '../components/page/editUserPage'
import UsersLoader from '../components/ui/hoc/usersLoader'
import { useSelector } from 'react-redux'
import { getCurrentUserId } from '../store/users'
const Users = () => {
  const params = useParams()
  const { userId, edit } = params
  const currentUserId = useSelector(getCurrentUserId())
  console.log(currentUserId)

  return (
    <>
      <UsersLoader>
        <UserProvider>
          {userId ? (
            edit ? (
              userId === currentUserId ? (
                <EditUserPage />
              ) : (
                <Redirect to={`users/${currentUserId}/edit`} />
              )
            ) : (
              <UserPage userId={userId} />
            )
          ) : (
            <UsersListPage />
          )}
        </UserProvider>
      </UsersLoader>
    </>
  )
}

export default Users
