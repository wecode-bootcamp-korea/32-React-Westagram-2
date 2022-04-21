import { useState } from 'react';
import { faTrashCan, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NewComment = ({ item, delteComment }) => {
  const [isitlike, setisitLike] = useState(item.isLiked);

  const clickLike = () => {
    if (!isitlike) {
      setisitLike(true);
    } else setisitLike(false);
  };

  const deleteItemBtn = () => {
    delteComment(item);
  };

  return (
    <li id={item.id} className="indiComment">
      <div className="commentandBtn">
        {' '}
        <div className="commentCon">
          <p className="commentName">{item.userName}</p>
          <p className="speak">{item.content}</p>
        </div>
        <div className="commentBtnContainer">
          <button onClick={clickLike} className="commentBtn" id="likebtn">
            <FontAwesomeIcon icon={isitlike ? faHeartPulse : faHeart} />
          </button>
          <button className="commentBtn" id="delete" onClick={deleteItemBtn}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default NewComment;
