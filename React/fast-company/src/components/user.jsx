import React from "react";
import Qualitie from "./qualitie";
import BookMark from './bookmark'

const User = ({ _id, name, profession, qualities, completedMeetings, rate, bookmark}) => {
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>{<Qualitie/>}</td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{bookmark}</td>
            <td>{rate}</td>
            <td><button type={'button'} className={'btn btn-danger'} onClick={() => {}}>delete</button></td>
        </tr>
    )
}

export default User