import React from 'react';
function Comments(props) {
  const userNames = props.userNames.map((a, i) => (
    <div className="Comments-list">
      <span className="nick">{a} </span>
      <span className="text">{props.userComments[i]}</span>
      <span className="like">
        <i class="fa-solid fa-heart" />
      </span>
      <span className="delete">
        <i class="fa-solid fa-x" />
      </span>
    </div>
  ));

  return userNames;
}

export default Comments;
