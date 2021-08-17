
const cohortName = '2105-SJS-RM-WEB-PT'
const BASEURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;


export const fetchPosts = async () => {
    const response = await fetch(`${BASEURL}/posts`);
    const result = await response.json();
    return result.data.posts;
}