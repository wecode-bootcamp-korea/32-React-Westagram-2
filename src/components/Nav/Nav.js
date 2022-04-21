import React from 'react';
import Search from '../../pages/LeeJiSoo/Main/SearchItem';
import { useEffect, useState } from 'react';
import './Nav.scss';

const Nav = ({ userFeed }) => {
  const [filterList, setFilterList] = useState([]);

  const handleSearch = e => {
    checkId(e.target.value);
  };

  const checkId = text => {
    if (text.trim() === '') return;
    const filteredItem = userFeed.filter(item => {
      item.userName.includes(text.trim());
    });

    setFilterList(filteredItem);
  };

  return (
    <nav className="nav">
      <div>
        <div className="nav-bar">
          <div className="nav-logo">
            <h1 className="nav-logo-title">
              <img
                alt="westagram-logo"
                src="/images/common/instagram.png"
                className="nav-img"
              />
              | westagram
            </h1>
          </div>
          <div className="nav-search">
            <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
            <input
              onKeyUp={handleSearch}
              className="nav-search-input"
              type="text"
              placeholder="검색"
            />
          </div>

          <div className="nav-icon">
            <img
              alt="explore-icon"
              src="/images/common/explore.png"
              className="nav-img nav-icon-exp"
            />
            <img
              alt="heart-icon"
              src="/images/common/heart.png"
              className="nav-img nav-icon-heart"
            />
            <img
              alt="profile-icon"
              src="/images/common/profile.png"
              className="nav-img nav-icon-profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
