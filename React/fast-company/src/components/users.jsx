import React from "react";
import User from "./user";


const Users = ({ users, onDelete, onBookMark}) => {
    return (
        <>
            {users.map((item) => (
                    <User {...item} key={item._id} user={item} onDelete={onDelete} onBookMark={onBookMark}/>
                )
            )}
        </>
    )
}

export default Users