/*eslint-disable */
import React, { useState, useEffect } from 'react';
import './LeeSooMain.scss';
import Nav from '../../../components/Nav/Nav';
import LeeSooAside from './Aside/LeeSooAside';
import Feeds from './Feed/Feeds.js';

const LeeSooMain = props => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/sooFeedData.json')
      .then(response => response.json())
      .then(response => setFeedData(response));
  }, []);

  return (
    <div className="wrapper">
      <Nav />
      <main>
        <div className="Feed-list">
          {feedData.map(({ id, title, isLiked, title2, profile }) => {
            return (
              <Feeds
                key={id}
                title={title}
                isLiked={isLiked}
                source={title2}
                profile={profile}
              />
            );
          })}
        </div>
        <div className="main-right">
          <LeeSooAside />
        </div>
      </main>
    </div>
  );
};

export default LeeSooMain;
