import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id:0, value:0, name: 'Ненужная вещь' },
        { id:1, value:0, name: 'Ложка' },
        { id:2, value:0, name: 'Вилка' },
        { id:3, value:0, name: 'Тарелка', },
        { id:4, value:0, name: 'Набор минималиста' }
    ]

    const [counters, setCounters] = useState(initialState)
    const handleDelete = (id) => {
        const newCounters = counters.filter((item) => item.id !== id)
        setCounters(newCounters)
    }
    const handleIncrement = (id) => {
        setCounters(prevState => {return prevState.map((item) => {
            if(item.id === id){
                return {...item, value: item.value + 1}
            } else {
                return item
            }
        })})
    }
    const handleDecrement = (id) => {
        setCounters(prevState => {return prevState.map((item) => {
            if(item.id === id && item.value >= 1){
                return {...item, value: item.value - 1}
            } else {
                return item
            }
        })})
        }
    const handelReset = () => {
        setCounters(initialState)
        console.log('handelReset')
    }

    return <>
        {counters.map((count) => (
            <Counter key = {count.id} onDelete = {handleDelete} {...count} onIncrement = {handleIncrement} onDecrement = {handleDecrement}/>
        ))}
        <button className='btn btn-primary btn-sm m-2' onClick={handelReset}>Сброс</button>
    </>
}

export default CountersList