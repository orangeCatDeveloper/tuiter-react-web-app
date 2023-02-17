const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row align-items-center">
                <div class="col-2">
                    <img src="../../images/${who.avatarIcon}" class="rounded-circle wd-avatar-size"/>
                </div>
                <div class="col-6 pe-0">
                    <div class="fw-bold">${who.userName} <i class="fa fa-check-circle"></i></div>
                    <div>@${who.handle}</div>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary d-flex justify-content-center rounded-pill wd-follow-btn">Follow</button>
                </div>
            </div>
        </li>   
    `);
}
export default WhoToFollowListItem;