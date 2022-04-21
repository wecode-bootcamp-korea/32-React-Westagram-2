import { useEffect, useState } from 'react';
import LeeJiSooCard from './LeeJiSooCard';

const LeeJiSooRecommend = ({ title, info }) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);

  return (
    <section className="story">
      <div className="titleDiv">
        <p>{title}</p>
        <p>{info}</p>
      </div>
      <div className="recommand">
        {feed.map(item => {
          const { userName, recommand, src, follow, time } = item;
          return (
            <LeeJiSooCard
              time={time}
              userName={userName}
              content={recommand}
              src={src}
              follow={follow ? '팔로우' : ''}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LeeJiSooRecommend;
