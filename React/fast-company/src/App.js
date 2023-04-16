import React, {useState} from "react";
import api from "./api";

import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId))
    }
    const handleToggleBookMark = (userId) => {
        setUsers(
            users.map((item) => {
                if (item._id === userId) {
                    const mark = !item.bookmark;
                    return { ...item, bookmark: mark };
                }
                return { ...item };
            })
        );
    }
    return (
        <>
            <SearchStatus length={users.length}/>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Избранное</th>
                    <th scope="col">Оценка</th>

                </tr>
                </thead>
                <tbody>
                <Users users={users} onDelete = {handleDelete} onBookMark = {handleToggleBookMark}/>
                </tbody>
            </table>
        </>
    )
}

export default App