import React from 'react';

const FeedsIcon = props => {
  return (
    <section className="feeds-icon">
      <div className="feeds-icon-left">
        <span className="feeds-icon-heart">
          <i className="fa-icon fa-regular fa-heart" />
        </span>
        <span className="feeds-icon-comment">
          <i className="fa-icon fa-regular fa-comment" />
        </span>
        <span className="feeds-icon-plane">
          <i className="fa-icon fa-regular fa-paper-plane" />
        </span>
      </div>
      <div className="feeds-icon-right">
        <span className="feeds-icon-bookmark">
          <i className="fa-icon fa-regular fa-bookmark" />
        </span>
      </div>
    </section>
  );
};

export default FeedsIcon;
