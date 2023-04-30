import React, { useState, useEffect } from 'react'
import api from './api'

import Users from './components/users'
import SearchStatus from './components/searchStatus'
import Pagination from './components/pagination'
import { paginate } from './utils/paginate'
import GroupList from './components/groupList'

function App() {
    const [currentPage, setCurrentPage] = useState(1)
    const [users, setUsers] = useState(api.users.fetchAll())
    const [professions, setProfession] = useState(api.professions.fetchAll())
    const [selectedProf, setSelectedProf] = useState()

    const pageSize = 4

    useEffect(() => {
        api.professions.fetchAll().then(prof => setProfession(prof))
    }, [])
    useEffect(() => {
        api.users.fetchAll().then(data => setProfession(data))
    }, [])
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const handleProfessionSelect = item => {
        setSelectedProf(item)
    }
    const handlePageChange = pageIndex => {
        setCurrentPage(pageIndex)
    }

    const filteredUsers = selectedProf ? users.filter(user => user.profession === selectedProf) : users
    const count = filteredUsers.length
    const userCrop = paginate(filteredUsers, currentPage, pageSize)

    const clearFilter = () => {
        setSelectedProf()
    }
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
        <div className={'d-flex'}>
            {professions && (
                <div className={'d-flex flex-column flex-shrink-0 p-3'}>
                    <GroupList selectedItem={selectedProf} items={professions} onItemSelect={handleProfessionSelect} />
                    <button className={'btn btn-secondary mt-2'} onClick={clearFilter}>
                        Очистить
                    </button>
                </div>
            )}
            <div className={'d-flex flex-column'}>
                <SearchStatus usersCount={count} />
                {count > 0 && (
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
                )}
                <div className={'d-flex justify-content-center'}>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
