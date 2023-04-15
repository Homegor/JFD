import React from "react";
import User from "./user";


const Users = ({ users, ...rest }) => {
    console.log(Users)
    return (
        <>
            <>
                {users.map((item) => (
                        <User key={item._id} user={item} />
                    )
                )}
            </>
        </>
    )
}

export default Users