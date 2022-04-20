import './LeeJiSooMain.scss';
import LeeJiSooMainTop from './LeeJiSooMainTop';
import LeeJiSooMainMiddle from './LeeJiSooMainMiddle';
import LeeJiSooMainBottom from './LeeJiSooMainBottom';
import LeeJiSooComment from './LeeJiSooComment';

const LeeJiSooContent = ({ feed }) => {
  return (
    <>
      {feed.map(item => {
        return (
          <article className="contentContainer">
            <LeeJiSooMainTop userName={item.userName} src={item.src} />
            <LeeJiSooMainMiddle src={item.src} />
            <LeeJiSooMainBottom
              nickname={item.userName}
              num={5}
              comment={item.text}
            />
            <LeeJiSooComment />
          </article>
        );
      })}
    </>
  );
};

export default LeeJiSooContent;
