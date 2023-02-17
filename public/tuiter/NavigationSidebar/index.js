const NavigationSidebar = (active) => {
    const homeActive = active === "home" ? "active" : "";
    const exploreActive = active === "explore" ? "active" : "";
    const notificationsActive = active === "notifications" ? "active" : "";
    const messagesActive = active === "messages" ? "active" : "";
    const bookmarksActive = active === "bookmarks" ? "active" : "";
    const listsActive = active === "lists" ? "active" : "";
    const profileActive = active === "profile" ? "active" : "";
    const moreActive = active === "more" ? "active" : "";
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i>
     </a>
     <a href="../HomeScreen/index.html" id="home" class="list-group-item ${homeActive}">
        <i class="fa fa-home"></i>
        <span class="d-none d-xl-inline-block">Home</span>
     </a>
     <a href="../ExploreScreen/index.html" id="explore" class="list-group-item ${exploreActive}">
        <i class="fa fa-hashtag"></i>
        <span class="d-none d-xl-inline-block">Explore</span>
     </a>
     <a href="#" id="notifications" class="list-group-item ${notificationsActive}">
        <i class="fa fa-bell"></i>
        <span class="d-none d-xl-inline-block">Notifications</span>
     </a>
     <a href="#" id="messages" class="list-group-item ${messagesActive}">
        <i class="fa fa-envelope"></i>
        <span class="d-none d-xl-inline-block">Messages</span>
     </a>
     <a href="#" id="bookmarks" class="list-group-item ${bookmarksActive}">
        <i class="fa fa-bookmark"></i>
        <span class="d-none d-xl-inline-block">Bookmarks</span>
     </a>
     <a href="#" id="lists" class="list-group-item ${listsActive}">
        <i class="fa fa-list"></i>
        <span class="d-none d-xl-inline-block">Lists</span>
     </a>
     <a href="#" id="profile" class="list-group-item ${profileActive}">
        <i class="fa fa-user"></i>
        <span class="d-none d-xl-inline-block">Profile</span>
     </a>
     <a href="#" id="more" class="list-group-item ${moreActive}">
        <i class="fa fa-ellipsis-h"></i>
        <span class="d-none d-xl-inline-block">More</span>
     </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;