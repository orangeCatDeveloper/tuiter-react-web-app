import './tuitItem.css'
import {useDispatch} from "react-redux";
import {tuitLikeToggle } from "./tuits-reducer";
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeToggleHandler = () => dispatch(tuitLikeToggle(tuit));

    return (
        <ul className="list-inline d-flex mt-3">
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
                    {
                        tuit.liked ? <i className="bi bi-heart-fill me-1 wd-red"/> : <i className="bi bi-heart me-1"/>
                    }
                    {tuit.likes}
                </a>
            </li>
            <li className="list-inline-item flex-fill">
                <a href="#" className="wd-non-text-decoration text-secondary">
                    <i className="bi bi-share"/>
                </a>
            </li>
        </ul>
    );
};

export default TuitStats;