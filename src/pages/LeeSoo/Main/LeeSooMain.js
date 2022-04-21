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
          {feedData.map(data => {
            return (
              <Feeds
                key={data.id}
                title={data.title}
                isLiked={data.isLiked}
                source={data.title2}
                profile={data.profile}
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
