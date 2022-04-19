/*eslint-disable */
import React, { useState, useEffect } from 'react';
import './LeeSooMain.scss';
import Nav from '../../../components/Nav/Nav';
// import Comments from './Comments.js';
import Feeds from './Feeds.js';

const LeeSooMain = props => {
  return (
    <div className="wrapper">
      <Nav />
      <main>
        <div className="Feed-list">
          <Feeds />
          <Feeds />
        </div>
        <div className="main-right">
          <div className="box-right">
            <div className="right-top">
              <div>
                <img alt="junbum 유저 이미지" src="/images/LeeSoo/junbum.jpg" />
              </div>
              <div className="r-top-text">
                <p>
                  <b>parkjunbum_wecode</b>
                </p>
                <p className="userSubText">Wecode / 위코드 32기</p>
              </div>
            </div>
            <div className="right-story">
              <div className="story-text">
                <p className="storyFontGray">스토리</p>
                <p>모두 보기</p>
              </div>
              <div className="story-list">
                <div className="story-img">
                  <img
                    alt="스토리 리스트 유저 이미지"
                    src="/images/LeeSoo/listman.jpg"
                  />
                </div>
                <div className="story-txt">
                  <b>_yum_s</b>
                  <p className="story-time">16분 전</p>
                </div>
              </div>
              <div className="story-list">
                <div className="story-img">
                  <img
                    alt="스토리 리스트 유저 이미지"
                    src="/images/LeeSoo/listman.jpg"
                  />
                </div>
                <div className="story-txt">
                  <b>drink_eat_drink</b>
                  <p className="story-time">3시간 전</p>
                </div>
              </div>
              <div className="story-list">
                <div className="story-img">
                  <img
                    alt="스토리 리스트 유저 이미지"
                    src="/images/LeeSoo/listman.jpg"
                  />
                </div>
                <div className="story-txt">
                  <b>hyukyc</b>
                  <p className="story-time">20시간 전</p>
                </div>
              </div>
              <div className="story-list">
                <div className="story-img">
                  <img
                    alt="스토리 리스트 유저 이미지"
                    src="/images/LeeSoo/listman.jpg"
                  />
                </div>
                <div className="story-txt">
                  <b>hyukyc</b>
                  <p className="story-time">25시간 전</p>
                </div>
              </div>
              <div className="story-list">
                <div className="story-img">
                  <img
                    alt="스토리 리스트 유저 이미지"
                    src="/images/LeeSoo/listman.jpg"
                  />
                </div>
                <div className="story-txt">
                  <b>hyukyc</b>
                  <p className="story-time">300시간 전</p>
                </div>
              </div>
            </div>
            <div className="right-story">
              <div className="story-text">
                <p className="storyFontGray">회원님을 위한 추천</p>
                <p>모두 보기</p>
              </div>
              <div className="story-list">
                <div className="story-img">
                  <img
                    alt="추천 유저 이미지"
                    src="/images/LeeSoo/listman2.jpg"
                  />
                </div>
                <div className="story-txt">
                  <b>_bitcoinIsalive</b>
                  <div className="follow-line">
                    <p className="storyFontGray">_piterpan 님 외에 3명이 ...</p>
                    <button className="follow-bt">팔로우</button>
                  </div>
                </div>
              </div>
              <div className="story-list">
                <div className="story-img">
                  <img
                    alt="추천 유저 이미지"
                    src="/images/LeeSoo/listman2.jpg"
                  />
                </div>
                <div className="story-txt">
                  <b>46floor_im_here</b>
                  <div>
                    <div className="follow-line">
                      <p className="storyFontGray">
                        helloWorld_ 님 외에 8명이 ...
                      </p>
                      <button className="follow-bt">팔로우</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-list">
                <div className="story-img">
                  <img
                    alt="추천 유저 이미지"
                    src="/images/LeeSoo/listman2.jpg"
                  />
                </div>
                <div className="story-txt">
                  <b>life_is.once</b>
                  <div>
                    <div className="follow-line">
                      <p className="storyFontGray">
                        piterpan 님 외에 3명이 ...
                      </p>
                      <button className="follow-bt">팔로우</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="right-footer">
              <p>
                Instagram 정보·지원·홍보 센터·API·
                <br />
                채용 정보·개인정보처리방침·약관·
                <br />
                디렉터리·프로필·해시태그·언어
                <br />
                <br />
                &copy; 2019 INSTAGRAM
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeeSooMain;
