import React, { useState, useEffect } from 'react';
function Comments(props) {
  const userNames = props.list.map(data => (
    <div key={data.id} className="Comments-list">
      <span className="nick">{data.userName} </span>
      <span className="text">{data.content}</span>
      <span className="like">
        <i className="fa-solid fa-heart" />
      </span>
      <span className="delete">
        <i className="fa-solid fa-x" />
      </span>
    </div>
  ));

  return userNames;
}

export default Comments;