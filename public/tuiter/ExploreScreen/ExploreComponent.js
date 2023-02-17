import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row d-flex position-relative justify-content-center align-items-center mb-2">
                <div class="col-11 d-flex align-items-center">
                    <i class="fa fa-search position-absolute ps-3"></i>
                    <input type="text" class="form-control rounded-pill ps-5"
                           placeholder="Search Tuiter"/>
                </div>
                <i class="col-1 fa fa-cog fa-2x text-primary"></i>
            </div>
           <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
           </ul>
           <div class="position-relative">
                <div class="fs-3 text-white fw-bold ms-2 position-absolute bottom-0">
                    SpaceX's Starship
                </div>
                <img src="../../images/starship.jpeg" class="w-100">
           </div> 
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
