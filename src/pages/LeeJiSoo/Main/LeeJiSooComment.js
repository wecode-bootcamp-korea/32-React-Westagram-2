import './LeeJiSooComment.scss';
import {
  faTrashCan,
  faHeart,
  faLaughWink,
} from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

const NewComment = ({ nickName, finalcomment, id }) => {
  const handleLike = e => {};
  return (
    <li id={id} className="indiComment">
      <div className="commentandBtn">
        {' '}
        <div className="commentCon">
          <p className="commentName">{nickName}</p>
          <p className="speak">{finalcomment}</p>
        </div>
        <div className="commentBtnContainer">
          <button onClick={handleLike} className="commentBtn" id="likebtn">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="commentBtn" id="delete">
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </li>
  );
};

const LeeJiSooComment = () => {
  const [editing, setEditing] = useState('');
  const [comment, setComment] = useState([]);
  const commentInputRef = useRef();
  const randomId = new Date();

  const onChange = e => {
    setEditing(e.target.value);
  };
  const addComment = text => {
    const newUser = {
      id: randomId,
      userName: 'undifined',
      said: text,
      like: false,
    };

    setComment([...comment, newUser]);
  };
  const onEnter = e => {
    if (e.key === 'Enter') {
      addComment(editing);
      setEditing('');
    }
  };

  return (
    <section>
      <div className="comment">
        <ul>
          <NewComment nickName={'pompom'} finalcomment={'말랑말랑'} />
          {comment.map(item => (
            <NewComment
              id={item.id}
              nickName={item.userName}
              finalcomment={item.said}
            />
          ))}
        </ul>
      </div>
      <div class="writing">
        <div>
          <FontAwesomeIcon icon={faLaughWink} />
        </div>
        <input
          ref={commentInputRef}
          onChange={onChange}
          onKeyDown={onEnter}
          class="commentinput"
          type="text"
          placeholder="댓글 달기..."
          value={editing}
        />
        <button class="submitBtn">게시</button>
      </div>
    </section>
  );
};

export default LeeJiSooComment;
