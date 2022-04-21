import './LeeJiSooCard.scss';

const LeeJiSooCard = props => {
  const { src, userName, time, content, follow } = props;
  return (
    <section className="profile">
      <div className="imgDiv">
        <img alt="room picture with frog" class="profileImg" src={src} />
      </div>
      <div className="info">
        <div>
          <p>{userName}</p>
          {time && <p>{time}분전에 업로드 했습니다</p>}
          <p>{content}</p>
        </div>
        <a>{follow}</a>
      </div>
    </section>
  );
};

export default LeeJiSooCard;
