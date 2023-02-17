const PostSummaryItem = (post) => {
    return `
    <li class="list-group-item">  
      <div class="row">
        <div class="col-10">
          ${post.topic === undefined ? "" : `<div class="text-secondary">${post.topic}</div>`}
          <div>
            ${post.userName === undefined ? "" : `<span class="fw-bold">${post.userName} </span>`}
            <i class="fa fa-check-circle"></i>
            ${post.time === undefined ? "" : `<span class="text-secondary"> - ${post.time}</span>`}
          </div>
          ${post.title === undefined ? "" : `<div class="fw-bold">${post.title}</div>`}
          ${post.tweets === undefined ? "" : `<div class="text-secondary">${post.tweets} Tweets</div>`}
        </div>
        <div class="col-2"> 
          <img src="${post.image}" class="float-end rounded wd-list-img"/> 
        </div>
      </div>
    </li>
  `;
}

export default PostSummaryItem;
