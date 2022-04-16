/*eslint-disable */
import React, { useState } from 'react';
import './LeeSooMain.scss';
import Nav from '../../../components/Nav/Nav';

const LeeSooMain = props => {
  let [UserNames, UserNamesChange] = useState(['hotguy_goophy']);
  let [UserComments, UserCommentsChange] = useState(['내일 디즈니 출근해야제']);
  let [Likes, LikesChange] = useState(false);

  let [inputValues, inputValuesChange] = useState('');

  let EnterCatch = e => {
    if (e.key === 'Enter') {
      {
        let commentsCopy = [...UserComments];
        let myNameCopy = [...UserNames];
        myNameCopy.push('Sooboi_97');
        commentsCopy.push(inputValues);
        UserCommentsChange(commentsCopy);
        UserNamesChange(myNameCopy);
        inputValuesChange('');
      }
    }
  };
  return (
    <div className="wrapper">
      <Nav />
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
                <b>&nbsp;&nbsp;goophyishollyshakeit</b>님 외{' '}
                <b>6명이 좋아합니다.</b>
              </p>
            </div>

            {/* 여기에 댓글 기능 구현하기 */}
            {UserNames.map((a, i) => {
              return (
                <div className="Comments-list">
                  <span className="nick">{a} </span>
                  <span className="text">{UserComments[i]}</span>
                  <span className="like">
                    <i class="fa-solid fa-heart"></i>
                  </span>
                  <span className="delete">
                    <i class="fa-solid fa-x"></i>
                  </span>
                </div>
              );
            })}

            {/* 여기에 댓글 입력창 구현하기 */}
            <div className="Comments-write" onKeyDown={EnterCatch}>
              <input
                className="input-area"
                type="text"
                placeholder="내용을 입력하세요"
                value={inputValues}
                onChange={e => {
                  inputValuesChange(e.target.value);
                }}
              />

              <button
                className="input-bt"
                onClick={() => {
                  {
                    let commentsCopy = [...UserComments];
                    let myNameCopy = [...UserNames];
                    myNameCopy.unshift('Sooboi_97');
                    commentsCopy.unshift(inputValues);
                    UserCommentsChange(commentsCopy);
                    UserNamesChange(myNameCopy);
                    inputValuesChange('');
                  }
                }}
              >
                게시
              </button>
            </div>
          </article>
          {/* ----------------------------------------- */}
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
