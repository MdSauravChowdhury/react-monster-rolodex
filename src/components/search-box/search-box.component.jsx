import React from 'react'
import '../search-box/search-box.style.css';

const SearchBox = ({ placeholder, handelChange }) => {
    return (
        <div className="centerBox">
            <input 
                type="search"
                placeholder={placeholder}
                onChange={handelChange}
                className="search"
            />
        </div>
    )
}

export default SearchBox
