import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import DeokWooAside from './Aside/DeokwooAside';
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
      {lists.map(({ userName, id, context }) => (
        <li key={id}>
          <span>{userName}</span> {context}
          <i className="fa-regular fa-heart" />
          <button onClick={() => handleDelete(id)} className="delete">
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

const Comment = () => {
  const [newText, setNewText] = useState({
    userName: 'wecode_bootcamp',
    id: Date.now(),
    context: '',
  });
  const [list, setList] = useState([]);

  const handleChange = ({ target }) => {
    const [name, value] = [target.name, target.value];
    setNewText(prev => ({
      ...prev,
      userName: 'wecode_bootcamp',
      id: Date.now(),
      [name]: value,
    }));
  };

  const handleDelete = id => {
    setList(prev => prev.filter(list => list.id !== id));
  };

  const replyEntry = e => {
    e.preventDefault();
    setList(prev => [...prev, newText]);
    setNewText('');
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/comment.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setList(data);
      });
  }, []);

  const isCheckSpace = str => {
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
            !isCheckSpace(newText.context) ? 'replyent' : 'replyent active'
          }
          onClick={replyEntry}
          disabled={!isCheckSpace(newText.context)}
        >
          게시
        </button>
      </form>
    </>
  );
};

const Feeds = ({ feeds }) => {
  return feeds.map(({ userName, context, likes, source, id }) => (
    <div key={id} className="feeds">
      <header className="left_head">
        <div className="head_left">
          <div className="pic">
            <img src="../../../images/deokwoo/1.JPG" alt="" />
          </div>
          <span>{userName}</span>
        </div>
        <div className="head_right">
          <i className="fa-solid fa-ellipsis fa-xl" />
        </div>
      </header>
      <figure className="left_body">
        <img alt="feedpicture" src={source} />
      </figure>
      <div className="left_icon">
        <div className="icon_left">
          <i className="fa-regular fa-heart fa-xl" />
          <i className="fa-regular fa-comment fa-xl" />
          <i className="fa-solid fa-arrow-up-from-bracket fa-xl" />
        </div>
        <div className="icon_right">
          <i className="fa-regular fa-bookmark fa-xl" />
        </div>
      </div>
      <div className="left_like">
        <div className="pic">
          <img alt="profilepic" src="../../../images/deokwoo/1.JPG" />
        </div>
        <p>
          <strong>aineworld</strong>님 외 <strong>{likes}명</strong>이
          좋아합니다
        </p>
      </div>
      <div className="left_content">
        <p>
          <span id="id1">{userName}</span> {context}
        </p>
      </div>
      <Comment />
    </div>
  ));
};

const Article = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);

  return (
    <article className="main_left">
      <Feeds feeds={feed} />
    </article>
  );
};

const DeokWooMain = () => {
  return (
    <main>
      <Nav />
      <section className="allSection">
        <Article />
        <div className="main_fixed" />
        <DeokWooAside />
      </section>
    </main>
  );
};

export default DeokWooMain;
