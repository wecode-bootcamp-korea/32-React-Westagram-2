import React from 'react';
import './Header.scss';

const Header = ({ header }) => {
  return (
    <div className="header">
      <div className="header-id">
        <img alt="profile-img" src={header.headerUrl} className="id-img" />
        <div className="id">{header.headerName}</div>
      </div>
      <div className="header-dot">
        <i className="fa-solid fa-ellipsis" />
      </div>
    </div>
  );
};

export default Header;
