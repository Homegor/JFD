import React from "react";
const SearchStatus = ({ length }) => {
    if(length === 0){
        return <h2><span className={'badge bg-danger'}>{'Никто с тобой не тусанет'}</span></h2>
    }
    if(length > 4 || length === 1){
        return <h2><span className="badge bg-primary">{ length } {'человек тусанет с тобой сегодня'}</span></h2>
    } else {
        return <h2><span className="badge bg-primary">{ length } {'человека тусанет с тобой сегодня'}</span></h2>
    }
}

export default SearchStatus