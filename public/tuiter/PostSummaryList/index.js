import PostSummaryItem from "./postsummaryitem.js";
import post from "./posts.js";

const PostSummaryList = () => {
    return (`
           <ul class="list-group">
            ${
                post.map(item => {
                    return(PostSummaryItem(item));
                }).join('')
            }
           </ul>
    `);
}

export default PostSummaryList;