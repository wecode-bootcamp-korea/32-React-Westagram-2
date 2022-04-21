import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

const LeeJiSooMainBottom = props => {
  const icon = [faHeart, faComment, faShareNodes];
  return (
    <section className="imgiconDiv">
      <div className="lowerIcon">
        <div className="iconDiv">
          {' '}
          {icon.map(item => (
            <div className="iconB">
              <FontAwesomeIcon icon={item} />
            </div>
          ))}
        </div>
        <div className="iconB">
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
      <div className="like">
        <span>{props.nickname}</span>
        <span>외 {props.num}명이 좋아합니다</span>
      </div>
      <div className="writerComment">
        {' '}
        <span>{props.nickname}</span>
        <span> {props.comment}</span>
      </div>
    </section>
  );
};

export default LeeJiSooMainBottom;
