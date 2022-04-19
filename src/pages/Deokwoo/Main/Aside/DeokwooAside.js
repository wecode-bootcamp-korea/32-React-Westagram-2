import React from 'react';

const DeokWooAside = props => {
  return (
    <div className="main_right">
      <header className="right_header">
        <div className="pic">
          <img alt="profilepic" src="/images/Deokwoo/3.jpeg" />
        </div>
        <div className="id">
          <p id="id">wecode_bootcamp</p>
          <p className="descript">WeCode | 위코드</p>
        </div>
      </header>
      <div className="right_body">
        <div className="story">
          <header className="story_header">
            <p className="title">스토리</p>
            <p className="all">모두 보기</p>
          </header>
          <div className="story_main">
            <ul>
              <li>
                <div className="pic" />
                <div className="id">
                  <p>_yum_s</p>
                  <p>16분 전</p>
                </div>
              </li>
              <li>
                <div className="pic" />
                <div className="id">
                  <p>drink_eat_drink</p>
                  <p>3시간 전</p>
                </div>
              </li>
              <li>
                <div className="pic" />
                <div className="id">
                  <p>hyukyc</p>
                  <p>20시간 전</p>
                </div>
              </li>
              <li>
                <div className="pic" />
                <div className="id">
                  <p>jminkeek</p>
                  <p>24시간 전</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="recommand">
          <header className="rec_header">
            <p className="title">회원님을 위한 추천</p>
            <p className="all">모두 보기</p>
          </header>
          <div className="rec_main">
            <ul>
              <li>
                <div className="pic" />
                <div className="id">
                  <p>joaaaaaahye</p>
                  _legend_a님 외 2명이 좋아합니다
                </div>
                <button>팔로우</button>
              </li>
              <li>
                <div className="pic" />
                <div className="id">
                  <p>rampart81</p>
                  ringo.in.seoul님 외 12명이 좋아합니다
                </div>
                <button>팔로우</button>
              </li>
              <li>
                <div className="pic" />
                <div className="id">
                  <p>shawnjjoo</p>
                  jimmylee1220님 외 11명이 좋아합니다.
                </div>
                <button>팔로우</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeokWooAside;
