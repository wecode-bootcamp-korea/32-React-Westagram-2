import './LeeJiSooMain.scss';
import LeeJiSooMainTop from './LeeJiSooMainTop';
import LeeJiSooMainMiddle from './LeeJiSooMainMiddle';
import LeeJiSooMainBottom from './LeeJiSooMainBottom';
import LeeJiSooComment from './LeeJiSooComment';
import { useEffect, useState } from 'react';
const LeeJiSooContent = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);
  console.log(feed);

  return (
    <>
      {feed.map(item => {
        return (
          <article className="contentContainer">
            <LeeJiSooMainTop userName={item.userName} src={item.src} />
            <LeeJiSooMainMiddle src={item.src} />
            <LeeJiSooMainBottom
              nickname={item.userName}
              num={5}
              comment={item.text}
            />
            <LeeJiSooComment />
          </article>
        );
      })}
    </>
  );
};

export default LeeJiSooContent;
