import { useEffect, useState } from 'react';
import { faLaughWink } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewComment from './LeeJiSooNewComment';
import './LeeJiSooComment.scss';

const LeeJiSooComment = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [showComment, setShowComment] = useState(false);
  const [hidden, setHidden] = useState('');

  useEffect(() => {
    fetch('/data/commentData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  const randomId = new Date().getUTCMilliseconds();

  const count = commentList.length;

  const onChange = e => {
    setComment(e.target.value.trim());
  };

  const addComment = text => {
    const newUser = {
      id: randomId,
      userName: 'undifined',
      content: text,
      isLike: false,
    };

    setCommentList([...commentList, newUser]);
  };

  const onEnter = e => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  const handleShow = () => {
    if (!showComment) {
      setHidden('none');
      setShowComment(true);
    } else setShowComment(false);
  };

  const handleDelete = item => {
    const filterdItem = commentList.filter(items => items.id !== item.id);
    setCommentList(filterdItem);
  };

  const handleCommentBtn = () => {
    addComment(comment);
    setComment('');
  };

  return (
    <section className="commentSection">
      <div className={('showComment', hidden && 'hidden')} onClick={handleShow}>
        댓글 {count}개보기...
      </div>
      {showComment && (
        <div className="comment">
          <ul>
            {commentList.map(item => (
              <NewComment
                delteComment={handleDelete}
                item={item}
                key={item.id}
              />
            ))}
          </ul>
        </div>
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
            value={comment}
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
