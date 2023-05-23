import React from 'react'
import { useParams } from 'react-router-dom'
import UsersCard from '../components/usersCard'
import UsersList from '../components/usersList'
const Users = () => {
    const { userId } = useParams()
    return <>{userId ? <UsersCard userId={userId} /> : <UsersList />}</>
}

export default Users
