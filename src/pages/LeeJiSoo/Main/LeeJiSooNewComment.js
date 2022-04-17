import { faTrashCan, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewComment = ({ item, delteComment }) => {
  const [isitlike, setLike] = useState(item.like);

  const clickLike = e => {
    if (!isitlike) {
      setLike(true);
    } else setLike(false);
  };

  const deleteItemBtn = e => {
    delteComment(item);
  };

  return (
    <li id={item.id} className="indiComment">
      <div className="commentandBtn">
        {' '}
        <div className="commentCon">
          <p className="commentName">{item.userName}</p>
          <p className="speak">{item.said}</p>
        </div>
        <div className="commentBtnContainer">
          <button onClick={clickLike} className="commentBtn" id="likebtn">
            {isitlike ? (
              <FontAwesomeIcon icon={faHeartPulse} />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
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
