import './LeeJiSooComment.scss';
import { faLaughWink } from '@fortawesome/free-regular-svg-icons';

import NewComment from './LeeJiSooNewComment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

const LeeJiSooComment = () => {
  const [editing, setEditing] = useState('');
  const [comment, setComment] = useState([
    {
      id: 1,
      userName: 'undifined',
      said: '예시문',
      like: false,
    },
  ]);
  const commentInputRef = useRef();
  const randomId = new Date().getUTCMilliseconds();

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
  const handleDelete = item => {
    const filterdItem = comment.filter(items => items.id !== item.id);
    setComment(filterdItem);
  };
  const handleCommentBtn = () => {
    if (editing) {
      addComment(editing);
      setEditing('');
    }
  };
  return (
    <section className="commentSection">
      <div className="comment">
        <ul>
          {comment.map(item => (
            <NewComment delteComment={handleDelete} item={item} key={item.id} />
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
        <button onClick={handleCommentBtn} className="submitBtn">
          게시
        </button>
      </div>
    </section>
  );
};

export default LeeJiSooComment;
