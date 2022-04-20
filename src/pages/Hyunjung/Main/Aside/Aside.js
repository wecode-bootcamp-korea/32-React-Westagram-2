import React from 'react';
import './Aside.scss';

const Aside = props => {
  return (
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
  );
};

export default Aside;
