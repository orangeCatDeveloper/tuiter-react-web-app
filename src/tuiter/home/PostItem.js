import './index.css'

const PostItem = ({post}) => {
    return (
        <li className="list-group-item tuit-item-border">
            <div className="row p-2">
                <div className="col-1">
                    <img src={post.avatarIcon} className="wd-avatar align-top"/>
                </div>
                <div className="col-11 ps-3">
                    <div className="wd-tuit-content">
                        <div
                            className="wd-tuit-content-name wd-light-gray d-flex justify-content-between">
                            <div>
                                <span className="fw-bold">{post.userName} </span>
                                <i className="bi bi-patch-check-fill text-primary"></i> @{post.handle} • {post.time}
                            </div>
                            <div><i className="bi bi-three-dots text-secondary"></i></div>
                        </div>
                        <p>{post.text}</p>
                    </div>

                    <div className="rounded-4 border border-secondary overflow-hidden">
                        <img src={post.image} className="border-bottom border-secondary img-fluid"/>
                        {(post.webTitle || post.webText || post.webLink) &&
                         <div className="p-3">
                             {post.webTitle && <><span
                                 className="text-white">{post.webTitle} </span><br/></>}
                             {post.webText && <><span
                                 className="text-secondary">{post.webText}</span><br/></>}
                             {post.webLink && <span className="text-secondary"><i
                                 className="bi bi-link-45deg"></i> {post.webLink}</span>}
                         </div>
                        }
                    </div>
                    <ul className="list-inline d-flex mt-3">
                        <li className="list-inline-item flex-fill">
                            <a href="#" className="wd-non-text-decoration text-secondary">
                                <i className="bi bi-chat me-1" /> {post.replies}
                            </a>
                        </li>
                        <li className="list-inline-item flex-fill">
                            <a href="#" className="wd-non-text-decoration text-secondary">
                                <i className="bi bi-arrow-left-right me-1" /> {post.retweets}
                            </a>
                        </li>
                        <li className="list-inline-item flex-fill">
                            <a href="#" className="wd-non-text-decoration text-secondary">
                                <i className="bi bi-heart me-1" /> {post.likes}
                            </a>
                        </li>
                        <li className="list-inline-item flex-fill">
                            <a href="#" className="wd-non-text-decoration text-secondary">
                                <i className="bi bi-upload" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default PostItem;