import './LeeJiSooMain.scss';
import LeeJiSooMainTop from './LeeJiSooMainTop';
import LeeJiSooMainMiddle from './LeeJiSooMainMiddle';
import LeeJiSooMainBottom from './LeeJiSooMainBottom';
import LeeJiSooComment from './LeeJiSooComment';
const LeeJiSooContent = () => {
  return (
    <>
      <article className="contentContainer">
        <LeeJiSooMainTop />
        <LeeJiSooMainMiddle />
        <LeeJiSooMainBottom nickname={'keroppi'} num={5} />
        <LeeJiSooComment />
      </article>
    </>
  );
};

export default LeeJiSooContent;
