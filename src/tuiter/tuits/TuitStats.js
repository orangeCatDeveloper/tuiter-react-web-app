import './tuitItem.css'
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeToggleHandler = () => dispatch(updateTuitThunk({
                                                                 ...tuit,
                                                                 likes: tuit.liked ? tuit.likes - 1
                                                                                   : tuit.likes + 1,
                                                                 liked: !tuit.liked
                                                             }));
    const dislikeToggleHandler = () => dispatch(updateTuitThunk({
                                                                    ...tuit,
                                                                    dislikes: tuit.disliked
                                                                              ? tuit.dislikes - 1
                                                                              : tuit.dislikes + 1,
                                                                    disliked: !tuit.disliked
                                                                }));

    return (<ul className="list-inline d-flex mt-3">
        <li className="list-inline-item flex-fill">
            <a href="#" className="wd-non-text-decoration text-secondary">
                <i className="bi bi-chat me-1"/> {tuit.replies}
            </a>
        </li>
        <li className="list-inline-item flex-fill">
            <a href="#" className="wd-non-text-decoration text-secondary">
                <i className="bi bi-arrow-left-right me-1"/> {tuit.retuits}
            </a>
        </li>
        <li className="list-inline-item flex-fill" onClick={likeToggleHandler}>
            <a href="#" className="wd-non-text-decoration text-secondary">
                {tuit.liked ? <i className="bi bi-hand-thumbs-up-fill me-1 wd-red"/> : <i
                    className="bi bi-hand-thumbs-up me-1"/>}
                {tuit.likes}
            </a>
        </li>
        <li className="list-inline-item flex-fill" onClick={dislikeToggleHandler}>
            <a href="#" className="wd-non-text-decoration text-secondary">
                {tuit.disliked ? <i className="bi bi-hand-thumbs-down-fill me-1 wd-red"/> : <i
                    className="bi bi-hand-thumbs-down me-1"/>}
                {tuit.dislikes}
            </a>
        </li>
        <li className="list-inline-item flex-fill">
            <a href="#" className="wd-non-text-decoration text-secondary">
                <i className="bi bi-share"/>
            </a>
        </li>
    </ul>);
};

export default TuitStats;