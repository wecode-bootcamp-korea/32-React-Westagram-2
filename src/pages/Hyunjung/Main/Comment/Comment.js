import React, { useEffect, useState } from 'react';
import './Comment.scss';

const Comment = ({ comment }) => {
  return (
    <li className="comment" key={comment.id}>
      <div className="comment-left">
        <span className="comment-id">{comment.userName}</span>
        <span className="comment-content">{comment.content}</span>
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
};

export default Comment;
