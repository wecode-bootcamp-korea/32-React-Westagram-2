import React, { useState } from 'react';
import Comment from '../Comment/HyunjungComment';

const CommentList = ({ feedsArr }) => {
  const [commentArr, setCommentArr] = useState(feedsArr.comment);
  const [inputValue, setInputValue] = useState('');

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    // if (inputValue === '') {
    //   return;
    // }
    // setCommentList(commentList => [...commentList, inputValue]);

    if (inputValue !== '') {
      const newUser = {
        id: Date.now(),
        userName: 'smileDay01',
        content: inputValue,
      };
      setCommentArr([...commentArr, newUser]);
    }
    setInputValue('');
  };

  return (
    <div>
      {commentArr.map(comment => (
        <Comment comment={comment} newComment={commentArr} />
      ))}

      <div className="comment-time">55분 전</div>
      <form className="feeds-comment-input" onSubmit={onFormSubmit}>
        <div className="comment-input">
          <input
            className="comment-text"
            placeholder="댓글 쓰기..."
            onChange={onInputChange}
            value={inputValue}
          />
        </div>
        <div className="comment-button">
          <button className="comment-btn">게시</button>
        </div>
      </form>
    </div>
  );
};

export default CommentList;
