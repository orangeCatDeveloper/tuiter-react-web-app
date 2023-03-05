import React, {useState} from "react";
import "./index.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../profile/profile-reducer";

const EditProfileComponent = () => {

    const profile = useSelector(state => state.profile)[0]
    let [newProfile, setNewProfile] = useState(profile);

    const dispatch = useDispatch();
    return (
        <div>
            <div className="mb-2 wd-edit-profile-header">
                <div>
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg"/>
                    </Link>
                    <span className="fw-bold fs-5 ps-4"> Edit Profile </span>
                </div>
                <Link to="/tuiter/profile">
                    <button className="btn btn-dark rounded-pill float-end"
                            onClick={() => dispatch(updateProfile(newProfile))}>
                        <span className="fw-bold px-1">Save</span>
                    </button>
                </Link>
            </div>
            <div className="position-relative mb-4">
                <img className="wd-edit-profile-banner" src={profile.bannerPicture}/>
                <img className="position-absolute rounded-circle wd-edit-profile-avatar" src={profile.profilePicture}/>
            </div>

            <div className="pt-5">
                <div>
                    <div className="form-floating">
                        <input type="text"
                               className="form-control"
                               id="name"
                               value={newProfile.name}
                               onChange = {e => setNewProfile({...newProfile,name: e.target.value})}
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                </div>

                <div className="pt-4">
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            id="bio"
                            style={{height: 100}}
                            onChange = {e => setNewProfile({...newProfile,bio: e.target.value})}
                            value = {newProfile.bio}
                        />
                        <label htmlFor="bio">Bio</label>
                    </div>
                </div>
                <div className="pt-4">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            value={newProfile.location}
                            onChange = {e => setNewProfile({...newProfile,location: e.target.value})}
                        />
                        <label htmlFor="location">Location</label>
                    </div>
                </div>

                <div className="pt-4">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="website"
                            value={newProfile.website}
                            onChange = {e => setNewProfile({...newProfile,website: e.target.value})}
                        />
                        <label htmlFor="website">Website</label>
                    </div>
                </div>
                <div className="pt-4">
                    <div className="form-floating">
                        <input
                            type="date"
                            className="form-control"
                            id="birthday"
                            value={newProfile.birthday}
                            onChange = {e => setNewProfile({...newProfile,birthday: e.target.value})}
                        />
                        <label htmlFor="birthday">Birthday</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditProfileComponent