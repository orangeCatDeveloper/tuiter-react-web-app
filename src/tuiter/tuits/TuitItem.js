import './tuitItem.css'
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item tuit-item-border">
            <div className="row p-2">
                <div className="col-1">
                    <img src={tuit.image} className="wd-avatar align-top"/>
                </div>
                <div className="col-11 ps-4">
                    <div className="wd-tuit-content">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <div
                            className="wd-tuit-content-name wd-light-gray d-flex justify-content-between">
                            <div>
                                <span className="fw-bold wd-black">{tuit.userName} </span>
                                <i className="bi bi-patch-check-fill text-primary"></i> {tuit.handle} • {tuit.time}
                            </div>
                        </div>
                        <p>{tuit.tuit}</p>
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;