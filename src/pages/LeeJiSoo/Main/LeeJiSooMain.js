import React, { useEffect, useState } from 'react';
import LeeJiSooContent from './LeeJiSooContent';
import LeeJiSoAside from './Aside/LeeJiSooAside';
import Nav from '../../../components/Nav/Nav';
import './LeeJiSooMain.scss';

const LeeJiSooMain = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);

  return (
    <>
      <header>
        <Nav userFeed={feed} />
      </header>
      <main className="feedMain">
        <article className="feedArticle">
          <LeeJiSooContent feed={feed} />
        </article>
        <article className="asideArticle">
          <LeeJiSoAside />
        </article>
      </main>
    </>
  );
};

export default LeeJiSooMain;
