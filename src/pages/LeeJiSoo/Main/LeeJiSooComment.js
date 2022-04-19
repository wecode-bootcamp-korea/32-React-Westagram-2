import './LeeJiSooComment.scss';
import { faLaughWink } from '@fortawesome/free-regular-svg-icons';

import NewComment from './LeeJiSooNewComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

const LeeJiSooComment = () => {
  const [editing, setEditing] = useState('');
  const [comment, setComment] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [display, setDisplayt] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setComment(data);
      });
  }, []);

  const commentInputRef = useRef();
  const randomId = new Date().getUTCMilliseconds();
  const count = comment.length;
  const onChange = e => {
    setEditing(e.target.value);
  };

  const addComment = text => {
    const newUser = {
      id: randomId,
      userName: 'undifined',
      content: text,
      isLike: false,
    };

    setComment([...comment, newUser]);
  };
  const onEnter = e => {
    if (e.key === 'Enter') {
      addComment(editing);
      setEditing('');
    }
  };
  const handleShow = () => {
    if (!showComment) {
      setDisplayt('none');
      setShowComment(true);
    } else setShowComment(false);
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

  const style = { display: display };
  return (
    <section className="commentSection">
      <div className="showComment" onClick={handleShow} style={style}>
        댓글 {count}개보기...
      </div>
      {showComment ? (
        <div className="comment">
          <ul>
            {comment.map(item => (
              <NewComment
                delteComment={handleDelete}
                item={item}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
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
