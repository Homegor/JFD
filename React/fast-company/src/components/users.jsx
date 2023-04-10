import React, {useState} from "react";
import api from "../api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId))
    }
    const renderPhrase = (number) => {
        return (
            (number === 0)
                ? <h2><span className={'badge bg-danger'}>{'Никто с тобой не тусанет'}</span></h2>
                : (number > 4 || number === 1)
                    ? <h2><span className="badge bg-primary">{number} {'человек тусанет с тобой сегодня'}</span></h2>
                    : <h2><span className="badge bg-primary">{number} {'человека тусанет с тобой сегодня'}</span></h2>
        )

    }

    const UsersQualities = ({_id, name, color}) => {
        return <span key={_id} className={`badge m-2 bg-${color}`}>{name}</span>
    }

    const usersInfo = users.map((user) => {
        return (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.qualities.map((item) => <UsersQualities key={item._id} _id={item._id} color={item.color} name={item.name}/>)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td><button type={'button'} className={'btn btn-danger'} onClick={() => {handleDelete(user._id)}}>delete</button></td>
            </tr>
        )
    })

    return (
        <>
            {renderPhrase(users.length)}
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качество</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {usersInfo}
                </tbody>
            </table>
        </>
    )
}

export default Users