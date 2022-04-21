import { useEffect, useState } from 'react';
import { faLaughWink } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewComment from './LeeJiSooNewComment';
import './LeeJiSooComment.scss';

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

  const style = { display: display };

  const randomId = new Date().getUTCMilliseconds();

  const count = comment.length;

  const onChange = e => {
    setEditing(e.target.value.trim());
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
    e.preventDefault();
    addComment(editing);
    setEditing('');
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
    addComment(editing);
    setEditing('');
  };

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
        <form className="commentForm" onSubmit={onEnter}>
          <input
            onChange={onChange}
            class="commentinput"
            type="text"
            placeholder="댓글 달기..."
            value={editing}
          />
        </form>
        <button onClick={handleCommentBtn} className="submitBtn">
          게시
        </button>
      </div>
    </section>
  );
};

export default LeeJiSooComment;
