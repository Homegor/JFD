import React from "react";

const BookMark = ({_id, status, onBookMark}) => {
    if(status === true){
        return <i className="bi bi-arrow-through-heart-fill" onClick={() => onBookMark(_id)}></i>
    }else if(status === false){
        return <i className="bi bi-arrow-through-heart" onClick={() => onBookMark(_id)}></i>
    }
}

export default BookMark