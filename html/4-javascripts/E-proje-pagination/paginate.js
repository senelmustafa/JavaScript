const paginate=(follower)=>{

const itemPerPage=10;
const numberOfPages=Math.ceil(follower.length/itemPerPage)

const newFollowers=Array.from({length:numberOfPages},(_,index)=>{


    const start=index*itemPerPage;
    return followers.slice(start,start+itemPerPage);
})
return newFollowers;



}
export default paginate;