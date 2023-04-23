import React, { useState } from 'react'
import api from './api'

import Users from './components/users'
import SearchStatus from './components/searchStatus'
import Pagination from './components/pagination'
import { paginate } from './utils/paginate'

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())
    const count = users.length
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = pageIndex => {
        setCurrentPage(pageIndex)
    }

    const userCrop = paginate(users, currentPage, pageSize)
    const handleDelete = userId => {
        setUsers(users.filter(user => user._id !== userId))
    }
    const handleToggleBookMark = userId => {
        setUsers(prevState => {
            return prevState.map(user => {
                if (user._id === userId) {
                    return { ...user, bookmark: !user.bookmark }
                }
                return user
            })
        })
    }
    return (
        <>
            <SearchStatus usersCount={count} />
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Имя</th>
                        <th scope='col'>Качества</th>
                        <th scope='col'>Профессия</th>
                        <th scope='col'>Встретился, раз</th>
                        <th scope='col'>Избранное</th>
                        <th scope='col'>Оценка</th>
                    </tr>
                </thead>
                <tbody>
                    <Users
                        userCrop={userCrop}
                        users={users}
                        onDelete={handleDelete}
                        onBookMark={handleToggleBookMark}
                    />
                </tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    )
}

export default App
