const url="https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollows=async()=>{
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export default fetchFollows;