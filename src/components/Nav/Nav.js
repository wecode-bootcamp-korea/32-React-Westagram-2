import React from 'react';
import './Nav.scss';

const Nav = props => {
  return (
    <nav className="nav">
      <div>
        <div className="nav-bar">
          <div className="nav-logo">
            <h1 className="nav-logo-title">
              <img
                alt="westagram-logo"
                src="/images/leeSoo/instagram.png"
                className="nav-img"
              />{' '}
              | westagram
            </h1>
          </div>
          <div className="nav-search">
            <i className="fa-solid fa-magnifying-glass nav-search-icon" />
            <input
              className="nav-search-input"
              type="text"
              placeholder="검색"
            />
          </div>
          <div className="nav-icon">
            <img
              alt="explore-icon"
              src="/images/leeSoo/explore.png"
              className="nav-img nav-icon-exp"
            />
            <img
              alt="heart-icon"
              src="/images/leeSoo/heart.png"
              className="nav-img nav-icon-heart"
            />
            <img
              alt="profile-icon"
              src="images/leeSoo/profile.png"
              className="nav-img nav-icon-profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
