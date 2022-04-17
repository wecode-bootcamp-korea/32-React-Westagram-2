import LeeJiSooContent from './LeeJiSooContent';
import LeeJiSoAside from './Aside/LeeJiSooAside';
import Nav from '../../../components/Nav/Nav';
import './LeeJiSooMain.scss';
const LeeJiSooMain = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <LeeJiSooContent />
        <LeeJiSoAside />
      </main>
    </>
  );
};

export default LeeJiSooMain;
