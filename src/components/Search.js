import React, { useState } from 'react';
import SinglePost from './SinglePost';

const Search = ({fetchPosts, posts, setPosts}) => {
    const [filteredPosts, setFilteredPosts] = useState([])
    const [query, setQuery] = useState('')

    const handleFilter = () => {
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes( query.toLowerCase() ));
        console.log(filteredPosts);
        setFilteredPosts(filteredPosts);
        setPosts(filteredPosts);
        query === '' && fetchPosts();
    }

    return <form className='search-form' onChange={handleFilter}>
        <input name='search' type='text' placeholder='FILTER POSTS' className='search-input' value={query} onChange={(e)=> setQuery(e.target.value)} />       
        <button type='submit'className='search-button' >Go</button>
    </form>
}

export default Search;