import React, { useState } from 'react';
import './HyunjungMain.scss';
import Nav from '../../../components/Nav/Nav';
import Comment from './Comment/HyunjungComment';

const HyunJungMain = props => {
  // const [commentList, setCommentList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [commentArr, setCommentArr] = useState([]);

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    // if (inputValue === '') {
    //   return;
    // }
    // setCommentList(commentList => [...commentList, inputValue]);
    const commentNewArr = [...commentArr];
    if (inputValue !== '') {
      commentNewArr.push({
        id: Date.now(),
        userId: 'smileDay01',
        comment: inputValue,
      });
      setCommentArr(commentNewArr);
    }
    setInputValue('');
  };
  return (
    <>
      <Nav />
      <main className="main-feeds">
        <section className="left">
          <div className="feeds">
            <div className="header">
              <div className="header-id">
                <img
                  alt="profile-img"
                  src="/images/Hyunjung/main.png"
                  className="id-img"
                />
                <div className="id">happyDay01</div>
              </div>
              <div className="header-dot">
                <i className="fa-solid fa-ellipsis" />
              </div>
            </div>
            <div className="feeds-pic">
              <img alt="main-pic" src="/images/Hyunjung/mainpage.jpg" />
            </div>
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
            <div className="feeds-like">좋아요 30,000 개</div>
            <div>
              <div className="feeds-article">
                <span className="feeds-article-id">
                  <strong>happyDay01</strong>
                </span>
                <span className="feeds-article-content"> 행복한 하루... </span>
                <span className="feeds-article-over">더 보기</span>
              </div>
              <div>
                <ul className="feeds-comment">
                  <Comment commentArr={commentArr} />
                </ul>
                <div className="comment-time">55분 전</div>
                {/* 인풋창 */}
                <form className="feeds-comment-input" onSubmit={onFormSubmit}>
                  <div className="comment-input">
                    <input
                      className="comment-text"
                      placeholder="댓글 쓰기..."
                      onChange={onInputChange}
                      value={inputValue}
                    />
                  </div>
                  <div className="comment-button">
                    <button className="comment-btn">게시</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="right">
          <div className="main-right">
            <div>
              <div className="aside-header">
                <img
                  alt="aside-profile-pic"
                  src="/images/Hyunjung/main.png"
                  className="header-aside-img"
                />
                <div className="aside-id">
                  <div className="aside-id-top">happyDay01</div>
                  <div className="aside-id-bottom">happyLife</div>
                </div>
              </div>
              <div className="aside-form">
                <form className="story">
                  <div className="story-header">
                    <div className="story-title">스토리</div>
                    <div>모두 보기</div>
                  </div>
                  <div className="aside-header">
                    <img
                      alt="story-user-pic01"
                      src="/images/Hyunjung/pro01.png"
                      className="aside-img"
                    />
                    <div className="aside-id">
                      <div className="aside-id-top">puppy_love</div>
                      <div className="aside-id-time">12분 전</div>
                    </div>
                  </div>
                  <div className="aside-header">
                    <img
                      alt="story-user-pic02"
                      src="/images/Hyunjung/pro02.png"
                      className="aside-img"
                    />
                    <div className="aside-id">
                      <div className="aside-id-top">smile_angry</div>
                      <div className="aside-id-time">32분 전</div>
                    </div>
                  </div>
                  <div className="aside-header">
                    <img
                      alt="story-user-pic03"
                      src="/images/Hyunjung/pro03.png"
                      className="aside-img"
                    />
                    <div className="aside-id">
                      <div className="aside-id-top">kitty_77</div>
                      <div className="aside-id-time">55분 전</div>
                    </div>
                  </div>
                </form>
                <form className="recommend">
                  <div className="recommend-header">
                    <div className="recommend-title">회원님을 위한 추천</div>
                    <div>모두보기</div>
                  </div>
                  <div className="member">
                    <div className="member-header">
                      <img
                        alt="recommend-user-pic01"
                        src="/images/Hyunjung/pro04.png"
                        className="aside-img"
                      />
                      <div className="aside-id">
                        <div className="aside-id-top">wink22_puppy</div>
                        <div className="aside-id-bottom">
                          puppy_love님 외 30명...
                        </div>
                      </div>
                    </div>
                    <div className="follow">팔로우</div>
                  </div>
                  <div className="member">
                    <div className="member-header">
                      <img
                        alt="recommend-user-pic02"
                        src="/images/Hyunjung/pro05.png"
                        className="aside-img"
                      />
                      <div className="aside-id">
                        <div className="aside-id-top">wow_7777</div>
                        <div className="aside-id-bottom">
                          puppy_love님 외 30명...
                        </div>
                      </div>
                    </div>
                    <div className="follow">팔로우</div>
                  </div>
                  <div className="member">
                    <div className="member-header">
                      <img
                        alt="recommend-user-pic03"
                        src="/images/Hyunjung/pro06.png"
                        className="aside-img"
                      />
                      <div className="aside-id">
                        <div className="aside-id-top">the_best_one01</div>
                        <div className="aside-id-bottom">
                          puppy_love님 외 30명...
                        </div>
                      </div>
                    </div>
                    <div className="follow">팔로우</div>
                  </div>
                </form>
                <div>
                  <div className="aside-info">
                    <div>westargram 정보 ∙ 지원 ∙ 홍보센터 ∙ API ∙</div>
                    <div>채용정보 ∙ 개인정보처리방침 ∙ 약관 ∙</div>
                    <div>디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어</div>
                  </div>
                </div>
                <div className="aside-right">© 2022 westagram</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HyunJungMain;
