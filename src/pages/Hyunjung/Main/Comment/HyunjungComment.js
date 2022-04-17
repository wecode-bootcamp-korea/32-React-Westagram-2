import React from 'react';
import './HyunjungComment.scss';

const Comment = ({ commentArr }) => {
  return commentArr.map(e => {
    return (
      <li className="comment" key={e.id}>
        <div className="comment-left">
          <span className="comment-id">{e.userId}</span>
          <span className="comment-content">{e.comment}</span>
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
    );
  });
};

export default Comment;
