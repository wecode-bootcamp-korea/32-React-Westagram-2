import React, { useEffect, useState } from 'react';
import './HyunjungMain.scss';
import Nav from '../../../components/Nav/Nav';
import Comment from './Comment/HyunjungComment';
import Header from './Header/Header';
import HyunJungAside from './Aside/HyunjungAside';
import FeedsIcon from './FeedsIcon/FeedsIcon';
import FeedsArticle from './FeedsArticle/FeedsArticle';
import CommentList from './CommentList/CommentList';

const HyunJungMain = props => {
  // const [commentList, setCommentList] = useState([]);

  const [feedsArr, setFeedsArr] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/data/commentData.json', { method: 'GET' })
  //     .then(res => res.json())
  //     .then(data => {
  //       setCommentArr(data);
  //     });
  // }, []);
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
                <Header feedsArr={feed} />
                <div className="feeds-pic">
                  <img alt="main-pic" src={feed.imgUrl} />
                </div>
                <FeedsIcon />
                <div className="feeds-like">좋아요 30,000 개</div>
                <div>
                  <FeedsArticle feedsArr={feed} />
                  <CommentList feedsArr={feed} />
                  {/* <div>
                    <Comment feedsArr={feed.comment} newComment={commentArr} />
                    <div className="comment-time">55분 전</div>
                    <form
                      className="feeds-comment-input"
                      onSubmit={onFormSubmit}
                    >
                      <div className="comment-input">
                        <input
                          className="comment-text"
                          placeholder="댓글 쓰기..."
                          onChange={onInputChange}
                          value={inputValue}
                        />
                      </div>
                      <div className="comment-button">
                        <button className="comment-btn">게시</button>
                      </div>
                    </form>
                  </div> */}
                </div>
              </div>
            </section>
          ))}
        </article>
        <HyunJungAside />
      </main>
    </>
  );
};

export default HyunJungMain;
