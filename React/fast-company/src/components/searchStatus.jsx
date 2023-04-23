import React from 'react'
import PropTypes from 'prop-types'
const SearchStatus = ({ usersCount }) => {
    if (usersCount === 0) {
        return (
            <h2>
                <span className={'badge bg-danger'}>{'Никто с тобой не тусанет'}</span>
            </h2>
        )
    }
    if (usersCount > 4 || usersCount === 1) {
        return (
            <h2>
                <span className='badge bg-primary'>
                    {usersCount} {'человек тусанет с тобой сегодня'}
                </span>
            </h2>
        )
    } else {
        return (
            <h2>
                <span className='badge bg-primary'>
                    {usersCount} {'человека тусанет с тобой сегодня'}
                </span>
            </h2>
        )
    }
}

SearchStatus.propTypes = {
    usersCount: PropTypes.func.isRequired
}

export default SearchStatus
