import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { paginate } from '../utils/paginate'
import Pagination from './pagination'
import api from '../api'
import GroupList from './groupList'
import SearchStatus from './searchStatus'
import UsersTable from './usersTable'
import _ from 'lodash'
const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfession] = useState([])
    const [selectedProf, setSelectedProf] = useState()
    const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })

    const [users, setUsers] = useState([])
    useEffect(() => {
        api.users.fetchAll().then(data => setUsers(data))
    }, [])
    const handleDelete = userId => {
        setUsers(users.filter(user => user._id !== userId))
    }
    const handleToggleBookMark = id => {
        setUsers(
            users.map(user => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark }
                }
                return user
            })
        )
        console.log(id)
    }

    const pageSize = 8
    useEffect(() => {
        api.professions.fetchAll().then(data => setProfession(data))
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
    const handelSort = item => {
        setSortBy(item)
    }

    if (users) {
        const filteredUsers = selectedProf ? users.filter(user => user.profession._id === selectedProf._id) : users
        const count = filteredUsers.length
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
        const usersCrop = paginate(sortedUsers, currentPage, pageSize)

        const clearFilter = () => {
            setSelectedProf()
        }

        useEffect(() => {
            if (currentPage > Math.ceil(filteredUsers.length / pageSize) && currentPage > 1) {
                setCurrentPage(currentPage - 1)
            }
        }, [users])

        return (
            <div className='d-flex'>
                {professions && (
                    <div className='d-flex flex-column flex-shrink-0 p-3'>
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button className='btn btn-secondary mt-2' onClick={clearFilter}>
                            {' '}
                            Очистить
                        </button>
                    </div>
                )}
                <div className='d-flex flex-column'>
                    <SearchStatus usersCount={count} />
                    {count > 0 && (
                        <UsersTable
                            users={usersCrop}
                            onSort={handelSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onBookMark={handleToggleBookMark}
                        />
                    )}
                    <div className='d-flex justify-content-center'>
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
    return 'loading'
}
Users.propTypes = {
    users: PropTypes.array
}

export default Users
