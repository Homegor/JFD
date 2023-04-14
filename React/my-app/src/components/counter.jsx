import React,{useState} from "react";
const Counter = (props) => {
    const {value, onIncrement, onDecrement} = props
    const formatValue = () =>{
        return value === 0 ? 'empty' : value
    }
    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += value === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }
    const handleIncrement =  () => {
        console.log('handleIncrement')
        //setValue((prevState) => prevState + 1)
    }
    const handleDecrement = () => {
        console.log('handleDecrement')
        //setValue((prevState) => prevState - 1)
    }

    return (
        <div>
            <span>{props.name}</span>
            <button className='btn btn-primary btn-sm m-2' onClick={() => onDecrement(props.id)} >-</button>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className='btn btn-primary btn-sm m-2' onClick={() => onIncrement(props.id)}>+</button>
            <button className='btn btn-danger btn-sm m-2' onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )
};

export default Counter