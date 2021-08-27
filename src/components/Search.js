import React from 'react';

const Search = () => {
    return <form className='search-form'>
        <input name='search' type='search' placeholder='FILTER POSTS' className='search-input'></input>
        <button type='submit'className='search-button'>Go</button>
    </form>
}

export default Search;