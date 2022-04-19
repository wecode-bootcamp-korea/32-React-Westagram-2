import React, { useEffect, useState } from 'react';
import LeeJiSooContent from './LeeJiSooContent';
import LeeJiSoAside from './Aside/LeeJiSooAside';
import LeeJiSooCard from './Aside/LeeJiSooCard';
import Nav from '../../../components/Nav/Nav';
import './LeeJiSooMain.scss';

const LeeJiSooMain = () => {
  const [feed, setFeed] = useState([]);
  const [filterList, setFilterd] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);

  const handleSearch = e => {
    checkId(e.target.value);
  };

  const checkId = text => {
    const filteredItem = feed.filter(item => {
      if (text.length < 1) {
        return item;
      } else if (item.userName.includes(text)) {
        return item;
      }
    });
    setFilterd(filteredItem);
  };

  return (
    <>
      <header>
        <Nav search={handleSearch} />
      </header>
      <div className="searchList">
        <div className="spanCon">
          <span>최근 검색항목</span>
        </div>
        {filterList.map(item => {
          return (
            <ul>
              <li>
                <LeeJiSooCard
                  userName={item.userName}
                  content={item.recommand}
                  src={item.src}
                />
              </li>
            </ul>
          );
        })}
      </div>
      <main>
        <div className="feedCon">
          <LeeJiSooContent />
        </div>
        <LeeJiSoAside />
      </main>
    </>
  );
};

export default LeeJiSooMain;
