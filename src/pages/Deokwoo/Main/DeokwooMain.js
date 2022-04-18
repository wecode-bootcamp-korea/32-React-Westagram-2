import React, { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import './DeokwooMain.scss';

const ReplyInput = ({ newText, handleChange }) => {
  return (
    <input
      name="context"
      onChange={handleChange}
      className="replyInput"
      type="text"
      placeholder="댓글 달기..."
      value={newText.context || ''}
    />
  );
};

const NewReply = ({ lists, handleDelete }) => {
  return (
    <ul className="reply_list">
      {lists.map(({ id, context }) => (
        <li key={id}>
          <span>wecode_bootcamp</span> {context}
          <i className="fa-regular fa-heart"></i>
          <button onClick={() => handleDelete(id)} className="delete">
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

const Comment = () => {
  const [newText, setNewText] = useState({ id: Date.now(), context: '' });
  const [list, setList] = useState([]);

  const handleChange = ({ target }) => {
    const [name, value] = [target.name, target.value];
    setNewText(prev => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const handleDelete = id => {
    setList(prev => prev.filter(list => list.id !== id));
  };

  const replyEntry = e => {
    e.preventDefault();
    setList(prev => [...prev, newText]);
    setNewText('');
  };

  const checkSpace = str => {
    const regExp = /[^\s|^$]/g;

    if (str === undefined) {
      return false;
    } else if (regExp.test(str)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="left_reply">
        <NewReply lists={list} handleDelete={handleDelete} />
      </div>
      <div className="left_timeline">
        <span id="time">42분</span> 전
      </div>
      <form className="left_input">
        <ReplyInput newText={newText} handleChange={handleChange} />
        <button
          className={
            !checkSpace(newText.context) ? 'replyent' : 'replyent active'
          }
          onClick={replyEntry}
          disabled={!checkSpace(newText.context)}
        >
          게시
        </button>
      </form>
    </>
  );
};

const DeokWooMain = () => {
  return (
    <main>
      <Nav />
      <section className="allSection">
        <article className="main_left">
          <header className="left_head">
            <div className="head_left">
              <div className="pic">
                <img src="/images/Deokwoo/1.JPG" alt="" />
              </div>
              <span>canon_mj</span>
            </div>
            <div className="head_right">
              <i className="fa-solid fa-ellipsis fa-xl"></i>
            </div>
          </header>
          <figure className="left_body">
            <img alt="feedpicture" src="/images/Deokwoo/2.jpeg" />
          </figure>
          <div className="left_icon">
            <div className="icon_left">
              <i className="fa-regular fa-heart fa-xl"></i>
              <i className="fa-regular fa-comment fa-xl"></i>
              <i className="fa-solid fa-arrow-up-from-bracket fa-xl"></i>
            </div>
            <div className="icon_right">
              <i className="fa-regular fa-bookmark fa-xl"></i>
            </div>
          </div>
          <div className="left_like">
            <div className="pic">
              <img alt="profilepic" src="/images/Deokwoo/1.JPG" />
            </div>
            <p>
              <strong>aineworld</strong>님 외 <strong>10명</strong>이 좋아합니다
            </p>
          </div>
          <div className="left_content">
            <p>
              <span id="id1">canon_mj</span> 위워크에서 진행한 베이킹 클래스...
            </p>
          </div>
          <Comment />
        </article>
        <div className="main_fixed"></div>
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
                    <div className="pic"></div>
                    <div className="id">
                      <p>_yum_s</p>
                      <p>16분 전</p>
                    </div>
                  </li>
                  <li>
                    <div className="pic"></div>
                    <div className="id">
                      <p>drink_eat_drink</p>
                      <p>3시간 전</p>
                    </div>
                  </li>
                  <li>
                    <div className="pic"></div>
                    <div className="id">
                      <p>hyukyc</p>
                      <p>20시간 전</p>
                    </div>
                  </li>
                  <li>
                    <div className="pic"></div>
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
                    <div className="pic"></div>
                    <div className="id">
                      <p>joaaaaaahye</p>
                      _legend_a님 외 2명이 좋아합니다
                    </div>
                    <button>팔로우</button>
                  </li>
                  <li>
                    <div className="pic"></div>
                    <div className="id">
                      <p>rampart81</p>
                      ringo.in.seoul님 외 12명이 좋아합니다
                    </div>
                    <button>팔로우</button>
                  </li>
                  <li>
                    <div className="pic"></div>
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
      </section>
    </main>
  );
};

export default DeokWooMain;
