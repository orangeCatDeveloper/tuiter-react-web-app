import PostItem from "./postitem.js";
import posts from "./posts.js"

const PostList = () => {
    return (`
            ${
                posts.map(item => {
                    return(PostItem(item));
                }).join('')
            }
           
    `);
}

export default PostList;