import React, { useState, useEffect } from 'react';
import '../LeeSooMain.scss';
import Comments from '../Comment/Comments.js';

function Feeds(props) {
  const [counter, setCounter] = useState(4);
  const [commentList, setCommentList] = useState([]);
  const [inputValues, inputValuesChange] = useState('');

  const removeComment = id => {
    setCommentList(
      commentList.filter(comment => {
        return comment.id !== id;
      })
    );
  };

  const EnterCatch = e => {
    if (e.key === 'Enter') {
      // eslint-disable-next-line no-lone-blocks
      {
        setCommentList([
          ...commentList,
          {
            id: Date.now(),
            userName: 'Sooboi_97',
            content: inputValues,
            isLiked: false,
          },
        ]);
        inputValuesChange('');
      }
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  const clickHeart = id => {
    const commentCopy = [...commentList];
    const clickItem = commentCopy.find(comment => comment.id === id);
    clickItem.isLiked = !clickItem.isLiked;
    setCommentList(commentCopy);
  };

  return (
    <div className="contents">
      <article>
        <div className="article-top">
          <img alt="유저 이미지" src={props.profile} className="userImg" />
          <p>{props.title}</p>
          <span className="dotMore">
            <a href="#">
              <i className="fa-solid fa-ellipsis" />
            </a>
          </span>
        </div>
        <div className="article-main">
          <img alt="피드사진" src={props.source} />
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
        <div className="Comments-show">
          {/* 여기에 댓글 기능 구현하기 */}
          <Comments
            list={commentList}
            clickHeart={clickHeart}
            removeComment={removeComment}
          />
        </div>
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
              // eslint-disable-next-line no-lone-blocks
              {
                setCounter(counter => counter + 1);
                setCommentList([
                  ...commentList,
                  {
                    id: counter,
                    userName: 'Sooboi_97',
                    content: inputValues,
                    isLiked: false,
                  },
                ]);
                inputValuesChange('');
              }
            }}
          >
            게시
          </button>
        </div>
      </article>
    </div>
  );
}

export default Feeds;
