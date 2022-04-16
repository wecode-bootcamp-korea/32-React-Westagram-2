import React from 'react';
import './HyunjungComment.scss';

const Comment = props => {
  return props.commentList.map((comment, index) => (
    <li className="comment" key={index}>
      <div className="comment-left">
        <span className="comment-id">smileDay01</span>
        <span className="comment-content">{comment}</span>
      </div>
      <div className="comment-right">
        <button className="comment-like">
          <i className="fa-icon fa-regular fa-heart" />
        </button>
        <button className="comment-delete">
          <i className="fa-solid fa-trash-can" />
        </button>
      </div>
    </li>
  ));
};

export default Comment;
