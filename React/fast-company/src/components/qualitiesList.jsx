import React from 'react'
import PropTypes from 'prop-types'
import Qualitie from './qualitie'

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map(item => (
                <Qualitie key={item.name} color={item.color} name={item.name} _id={item._id} />
            ))}
        </>
    )
}

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
}

export default QualitiesList
