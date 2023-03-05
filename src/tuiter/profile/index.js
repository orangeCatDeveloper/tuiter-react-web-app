import React from "react";
import "./index.css"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {

    const profile = useSelector(state => state.profile)[0];

    const birthday = new Date(profile.birthday.replace(/-/g, '\/'));
    const dateJoined = new Date(profile.dateJoined.replace(/-/g, '\/'));

    return (
        <>
            <div className="wd-profile-header mb-1">
                <i className="ms-1 bi bi-arrow-left"/>
                <div>
                    <h5 className="ms-5 my-0 fw-bold">{profile.name}</h5>
                    <span className="ms-5 my-0 text-secondary">6,114 Tweets</span>
                </div>
            </div>

            <div className="position-relative">
                <img className="wd-profile-banner" src={profile.bannerPicture}/>
                <img className="position-absolute rounded-circle wd-profile-avatar" src={profile.profilePicture}/>
            </div>

            <div className="row py-0">
                <div>
                    <Link to="/tuiter/edit-profile">
                        <button className="rounded-pill fw-bold float-end py-2 px-3 my-3 mx-2 btn btn-outline-dark border-2">
                            Edit profile
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="my-3">
                    <h5 className="my-0 fw-bold">{profile.name}</h5>
                    <span className="my-0 text-secondary">{profile.handle}</span>
                    <p className="my-2">{profile.bio}</p>
                </div>

                <div className="text-secondary">
                    <div className="mb-2">
                        <div className="d-inline-block pe-3"><i
                            className="bi bi-geo-alt"/> {profile.location}</div>
                        <div className="d-inline-block pe-3"><i
                            className="bi bi-balloon"/> Born {birthday.toLocaleDateString(
                            'en-us', {year: "numeric", month: "long", day: "numeric"})}</div>
                        <div className="d-inline-block pe-3"><i className="bi bi-calendar"/> Joined {dateJoined.toLocaleDateString(
                            'en-us', {year: "numeric", month: "long"})}</div>
                        <div className="d-inline-block pe-3"><i
                            className="bi bi-link-45deg"/> {profile.website}</div>
                    </div>
                    <div>
                        <span className="pe-4">
                            <span className="text-black fw-bold">{profile.followingCount}</span> Following
                        </span>
                        <span className="pe-4">
                            <span className="text-black fw-bold">{profile.followersCount}</span> Followers
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ProfileComponent;