import { useEffect, useState } from 'react';
import LeeJiSooCard from './LeeJiSooCard';

const LeeJiSooRecommend = props => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);

  return (
    <section class="story">
      <div className="titleDiv">
        <p>{props.title}</p>
        <p>{props.info}</p>
      </div>
      <div className="recommand">
        {feed.map(item => (
          <LeeJiSooCard
            userName={item.userName}
            content={item.recommand}
            src={item.src}
            follow={item.follow === true ? '팔로우' : ''}
          />
        ))}
      </div>
    </section>
  );
};

export default LeeJiSooRecommend;
