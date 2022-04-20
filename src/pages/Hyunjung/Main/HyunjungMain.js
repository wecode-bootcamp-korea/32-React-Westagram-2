import React, { useEffect, useState } from 'react';
import './HyunjungMain.scss';
import Nav from '../../../components/Nav/Nav';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import FeedsIcon from './FeedsIcon/FeedsIcon';
import FeedsArticle from './FeedsArticle/FeedsArticle';
import CommentList from './CommentList/CommentList';

const HyunJungMain = props => {
  const [feedsArr, setFeedsArr] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setFeedsArr(data);
      });
  }, []);

  return (
    <>
      <Nav />

      <main className="main-feeds">
        <article>
          {feedsArr.map(feed => (
            <section className="left" key={feed.feedId}>
              <div className="feeds">
                <Header header={feed} />
                <div className="feeds-pic">
                  <img alt="main-pic" src={feed.imgUrl} />
                </div>
                <FeedsIcon />
                <div className="feeds-like">좋아요 30,000 개</div>
                <div>
                  <FeedsArticle feedsArr={feed} />
                  <CommentList feedsArr={feed} />
                </div>
              </div>
            </section>
          ))}
        </article>
        <Aside />
      </main>
    </>
  );
};

export default HyunJungMain;
