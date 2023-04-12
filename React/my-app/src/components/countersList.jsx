import React, {useState} from "react";
import Counter from "./counter";
import counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id:0, value:10, name: 'Ненужная вещь' },
        { id:1, value:2, name: 'Ложка' },
        { id:2, value:1, name: 'Вилка' },
        { id:3, value:3, name: 'Тарелка', },
        { id:4, value:4, name: 'Набор минималиста' }
    ]

    const [counters, setCounters] = useState(initialState)
    const handleDelete = (id) => {
        const newCounters = counters.filter((item) => item.id !== id)
        setCounters(newCounters)
    }
    const handelReset = () => {
        setCounters(initialState)
        console.log('handelReset')
    }
    return <>
        {counters.map((count) => (
            <Counter key = {count.id} onDelete = {handleDelete} {...count}/>
        ))}
        <button className='btn btn-primary btn-sm m-2' onClick={handelReset}>Сброс</button>
    </>
}

export default CountersList