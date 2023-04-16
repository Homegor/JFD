import React from "react";
import Qualities from "./qualitie";
import BookMark from './bookmark'

const User = ({ _id, name, profession, qualities, completedMeetings, rate, bookmark, onDelete, onBookMark}) => {
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>{qualities.map((item) => (<Qualities key={item.name} color={item.color} name={item.name} _id={item._id} />))}</td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td><BookMark status={bookmark} onBookMark={onBookMark} _id={_id}/></td>
            <td>{rate}</td>
            <td><button type={'button'} className={'btn btn-danger'} onClick={() => {onDelete(_id)}}>delete</button></td>
        </tr>
    )
}

export default User