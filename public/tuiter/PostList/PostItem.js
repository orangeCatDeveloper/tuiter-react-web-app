const PostItem = (post) => {
    return(`
        <div class="wd-tuit-item">
            <img src="${post.avatarIcon}" class="wd-avatar"/>
            <div class="wd-tweet-content">
                <div class="wd-tuit-content">
                        <div class="wd-tuit-content-name wd-light-gray d-flex justify-content-between">
                            <div>
                                <span class="wd-tuit-author">${post.userName}</span>
                                <i class="fa fa-check-circle text-white"></i> @${post.handle} • ${post.time}
                            </div>
                            <div><i class="fa fa fa-ellipsis-h pe-2 text-secondary"></i></div>
                        </div>
                        <p>${post.text}</p>
                </div>
      
                <div class="rounded-4 border border-secondary overflow-hidden">
                    <img src="${post.image}" class="border-bottom border-secondary img-fluid">
                    ${ (post.webTitle !== undefined || post.webText !== undefined || post.webLink !== undefined) ?
                    `<div class="p-3">
                        ${post.webTitle === undefined ? "" : `<span class="text-white">${post.webTitle} </span><br>`}
                        ${post.webText === undefined ? "" : `<span class="text-secondary">${post.webText}</span><br>`}
                        ${post.webLink === undefined ? "" : `<span class="text-secondary"><i class="fa fa-link"></i> ${post.webLink}</span>`}
                    </div>` : ""
                    }
                </div>
                <ul class="list-inline d-flex mt-3">
                    <li class="list-inline-item flex-fill">
                        <a href="#" class="wd-non-text-decoration text-secondary">
                            <i class="fa-regular fa-comment pe-2"></i> ${post.replies}
                        </a>
                    </li>
                    <li class="list-inline-item flex-fill">
                        <a href="#" class="wd-non-text-decoration text-secondary">
                            <i class="fa fa-retweet pe-2"></i> ${post.retweets}
                        </a>
                    </li>
                    <li class="list-inline-item flex-fill">
                        <a href="#" class="wd-non-text-decoration text-secondary">
                            <i class="fa-regular fa-heart pe-2"></i> ${post.likes}
                        </a>
                    </li>
                    <li class="list-inline-item flex-fill">
                        <a href="#" class="wd-non-text-decoration text-secondary">
                            <i class="fa fa-upload pe-2"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `);
}
export default PostItem;