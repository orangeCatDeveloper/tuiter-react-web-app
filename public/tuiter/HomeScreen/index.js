/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";


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