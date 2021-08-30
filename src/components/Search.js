import React, { useState } from 'react';

const Search = ({fetchPosts, posts, setPosts}) => {
    const [query, setQuery] = useState('')
    const [isTitle, setIsTitle] = useState('title');
    
    const handleFilter = async (e) => {
        e.preventDefault();
        console.log(posts)
        let filteredPosts
        if (isTitle === 'title')
            {filteredPosts = posts.filter(post => post.title.toLowerCase().includes( query.toLowerCase() ))}           
        if (isTitle === 'desc')
            {filteredPosts = posts.filter(post => post.description.toLowerCase().includes( query.toLowerCase() ))}
        if (isTitle === 'author')
            {filteredPosts = posts.filter(post => post.author.username.toLowerCase().includes( query.toLowerCase() ))}
        setPosts(filteredPosts);
        query === '' && await fetchPosts();
    }

    return <form className='search-form' onChange={handleFilter}>
        <input name='search' type='text' placeholder='FILTER POSTS' className='search-input' value={query} onChange={(e)=> setQuery(e.target.value)} />
        <select value={isTitle} onChange={(e)=> setIsTitle(e.target.value)}>
            <option value='title'>TITLE</option>
            <option value='desc'>DESCRIPTION</option>
            <option value='author'>AUTHOR</option>
        </select>     
        <button type='submit'className='search-button' >reset</button>
        <div></div>
    </form>
}

export default Search;