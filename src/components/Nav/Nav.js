import React, { useRef } from 'react';
import './Nav.scss';
import SearchItem from '../../pages/LeeJiSoo/Main/SearchItem';
import { useEffect, useState } from 'react';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const Nav = props => {
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
              onKeyUp={props.search}
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
