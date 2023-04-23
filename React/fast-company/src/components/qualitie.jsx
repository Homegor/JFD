import React from 'react'
import PropTypes from 'prop-types'
const Qualitie = ({ color, name, _id }) => {
    return <span className={`badge m-2 bg-${color}`}>{name}</span>
}

Qualitie.protoTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.number.isRequired
}
export default Qualitie
