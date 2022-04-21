import LeeJiSooCard from './LeeJiSooCard';
import LeeJiSooRecommend from './LeeJiSooRecommend';
import '../LeeJiSooMain.scss';
import './LeeJiSooAside.scss';

const LeeJiSoAside = ({ feed }) => {
  return (
    <article className="sideContainer">
      <LeeJiSooCard
        feed={feed}
        userName="Keroppi"
        content="I love frog"
        src="/images/LeeJiSoo/room.png"
      />
      <LeeJiSooRecommend title="회원님을 위한 추천" info="모두 보기" />
      <section class="sideInfo">
        <div>
          소개‐도움말‐홍보 센터‐API‐채용 정보‐개인정보처리방침‐약관‐위치‐인기
          계정‐해시태그‐언어
        </div>
        <div>© 2022 WESTAGRAM</div>
      </section>
    </article>
  );
};

export default LeeJiSoAside;
