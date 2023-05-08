import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
    const itemsArr = Array.isArray(items) ? items : Object.values(items)
    console.log('itemsArr', itemsArr)
    console.log('items', items)
    console.log('valueProperty', valueProperty)
    console.log('contentProperty', contentProperty)
    console.log('onItemSelect', onItemSelect)
    console.log('selectedItem', selectedItem)
    return (
        <ul className='list-group'>
            {Object.keys(items).map(item => (
                <li
                    key={items[item][valueProperty]}
                    className={'list-group-item' + (items[item] === selectedItem ? ' active' : '')}
                    onClick={() => onItemSelect(items[item])}
                    role='button'
                >
                    {items[item][contentProperty]}
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
