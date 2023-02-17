/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar";
import PostList from "../PostList";


function homeComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2">
                ${NavigationSidebar("home")}
            </div>
            <div class="col-10">
                ${PostList()}
            </div>
        </div>
   `);
}

$(homeComponent);