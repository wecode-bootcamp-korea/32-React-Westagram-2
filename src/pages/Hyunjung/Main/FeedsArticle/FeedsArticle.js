import React from 'react';
import './FeedsArticle.scss';

const FeedsArticle = ({ feedsArr }) => {
  return (
    <div className="feeds-article">
      <span className="feeds-article-id">
        <strong> {feedsArr.articleName} </strong>
      </span>
      <span className="feeds-article-content"> {feedsArr.articleContent} </span>
      <span className="feeds-article-over">더 보기</span>
    </div>
  );
};

export default FeedsArticle;
