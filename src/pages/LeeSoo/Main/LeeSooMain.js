import React, { useState } from 'react';
import './LeeSooMain.scss';
import {} from 'react-router-dom';
const LeeSooMain = props => {
  let [CommentsNick, CommentsNickChange] = useState(['Mc.donaldo']);
  let [CommentsTxt, CommentsTxtChange] = useState(['내일은 디즈니 출근해야지']);
  let [Likes, LikesChange] = useState(0);
  let [CommentsDel, CommentsDelChange] = useState(false);

  return (
    <div className="wrapper">
      <nav>
        <div className="nav-left">
          <a href="http://localhost:3000/LeeSoo-Login">
            <img alt="인스타 로고" src="/images/LeeSoo/insta.png" />
          </a>
          <span className="logo">Westagram</span>
        </div>
        <div className="nav-center">
          <div className="searchBar">
            <input type="text" placeholder="검색" />
            <div className="searchIcon">
              <i className="fa-solid fa-magnifying-glass" />
            </div>
          </div>
        </div>
        <div className="nav-right">
          <a href="#">
            <img alt="나침반 로고" src="/images/LeeSoo/explore.png" />
          </a>
          <a href="#">
            <img alt="하트 로고" src="/images/LeeSoo/heart.png" />
          </a>
          <a href="./login.html">
            <img
              alt="프로필 로고"
              src="/images/LeeSoo/profile.png"
              onclick="alert('로그인 화면으로 돌아갑니다 😮')"
            />
          </a>
        </div>
      </nav>
      <main>
        <div className="contents">
          <article>
            <div className="article-top">
              <img
                alt="유저 이미지"
                src="/images/LeeSoo/userImg.jpg"
                className="userImg"
              />
              <p>Iwannarest_TT</p>
              <span className="dotMore">
                <a href="#">
                  <i className="fa-solid fa-ellipsis" />
                </a>
              </span>
            </div>
            <div className="article-main">
              <img alt="피드사진" src="/images/LeeSoo/feed.jpg" />
            </div>
            <div className="article-bar">
              <div className="bar-left">
                <button>
                  <span className="bar-like">
                    <i className="fa-solid fa-heart fa-2x" />
                  </span>
                </button>
                <button>
                  <span className="bar-comments">
                    <i className="fa-solid fa-comment fa-2x" />
                  </span>
                </button>
                <button>
                  <span className="bar-share">
                    <i className="fa-solid fa-arrow-up-from-bracket fa-2x" />
                  </span>
                </button>
              </div>

              <div className="bar-right">
                <button>
                  <span className="bar-bookmark">
                    <i className="fa-solid fa-bookmark fa-2x" />
                  </span>
                </button>
              </div>
              <div className="clearFloat" />
            </div>
            <div className="article-reaction">
              <img alt="좋아요 유저파일" src="/images/LeeSoo/likeuser.jpg" />
              <p>
                <b>&nbsp;&nbsp;goophyishollyshakeit님 외 6명이 좋아합니다</b>
              </p>
            </div>
            <div className="article-comments">
              <div>
                <p>
                  <b>elsaisfree</b> 정신못차렸누 쥐놈아 쥐놈아...
                  <span className="text-more"> 더 보기</span>
                </p>
              </div>
              <div className="comment-with-like">
                <p>
                  <b>donalduck</b> ㅋㅋ 담고?
                </p>
                <button>
                  <span className="comment-like">
                    <i className="fa-solid fa-heart" />
                  </span>
                </button>
              </div>
              <p className="lastInTime">42분 전</p>
              <ul id="comments" />
            </div>
            <div className="article-write">
              <form action="#" id="instaForm">
                <input
                  type="text"
                  name="username"
                  value="sooboi"
                  placeholder="숨기자"
                  className="hide_input"
                />
                <input
                  type="text"
                  name="comment"
                  placeholder="댓글 달기..."
                  className="textIn"
                />
                <button className="textBt">게시</button>
              </form>
            </div>
          </article>
          <br />
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
