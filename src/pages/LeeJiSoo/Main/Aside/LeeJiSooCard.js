const LeeJiSooCard = props => {
  return (
    <section className="profile">
      <div className="imgDiv">
        {' '}
        <img alt="room picture with frog" class="profileImg" src={props.src} />
      </div>
      <div className="info">
        {' '}
        <div>
          {' '}
          <p>{props.userName}</p>
          <p>{props.time ? `${props.time}분전에 업로드 했습니다` : ''}</p>
          <p>{props.content}</p>
        </div>
        <a>{props.follow}</a>
      </div>
    </section>
  );
};

export default LeeJiSooCard;
