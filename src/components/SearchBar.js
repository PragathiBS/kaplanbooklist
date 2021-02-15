import React from 'react';

function SearchBar({searchData, onInputSearchData}) {
    return (
        <form>
            <div className="input-wrapper m-3">
                <input type="text" onChange={onInputSearchData} value={searchData} className="search" name="search" placeholder="Search by title, author or publisher"/>
            </div>
        </form>
    );
}

export default SearchBar;