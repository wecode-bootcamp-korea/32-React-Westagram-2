import React from 'react';

const Header = ({ feedsArr }) => {
  // console.log(feedsArr.HeaderUrl);
  return (
    <div className="header">
      <div className="header-id">
        <img alt="profile-img" src={feedsArr.headerUrl} className="id-img" />
        <div className="id">{feedsArr.headerName}</div>
      </div>
      <div className="header-dot">
        <i className="fa-solid fa-ellipsis" />
      </div>
    </div>
  );
};

export default Header;
