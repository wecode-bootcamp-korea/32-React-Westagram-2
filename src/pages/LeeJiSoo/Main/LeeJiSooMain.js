import LeeJiSooContent from './LeeJiSooContent';
import LeeJiSoAside from './Aside/LeeJiSooAside';
import './LeeJiSooMain.scss';
const LeeJiSooMain = () => {
  return (
    <>
      <main>
        <LeeJiSooContent />
        <LeeJiSoAside />
      </main>
    </>
  );
};

export default LeeJiSooMain;
