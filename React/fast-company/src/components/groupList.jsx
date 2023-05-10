import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
    const itemsArr = Array.isArray(items) ? items : Object.values(items)
    return (
        <ul className='list-group'>
            {Object.keys(itemsArr).map(item => (
                <li
                    key={itemsArr[item][valueProperty]}
                    className={'list-group-item' + (itemsArr[item] === selectedItem ? ' active' : '')}
                    onClick={() => onItemSelect(itemsArr[item])}
                    role='button'
                >
                    {itemsArr[item][contentProperty]}
                </li>
            ))}
        </ul>
    )
}
GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name'
}
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
}
export default GroupList
