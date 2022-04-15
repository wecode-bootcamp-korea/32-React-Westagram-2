import LeeJiSooCard from './LeeJiSooCard';

const LeeJiSooStory = props => {
  const data = [
    {
      userName: 'keroppi',
      src: '/images/LeeJiSoo/room.png',
      text: 'mushroom님외 2명이 팔로우..',
      follow: true,
    },
    {
      userName: 'mushroom',
      src: '/images/LeeJiSoo/mushroom.png',
      text: 'mushroom님외 2명이 팔로우..',
      follow: true,
    },
    {
      userName: 'pompom',
      src: '/images/LeeJiSoo/covid.PNG',
      text: 'mushroom님외 2명이 팔로우..',
      follow: true,
    },
    {
      userName: 'pompom',
      src: '/images/LeeJiSoo/covid.PNG',
      text: 'mushroom님외 2명이 팔로우..',
      follow: true,
    },
    {
      userName: 'pompom',
      src: '/images/LeeJiSoo/covid.PNG',
      text: 'mushroom님외 2명이 팔로우..',
      follow: true,
    },
  ];
  return (
    <section class="story">
      <div className="titleDiv">
        <p>{props.title}</p>
        <p>{props.info}</p>
      </div>
      {data.map(item => (
        <LeeJiSooCard
          userName={item.userName}
          time={item.time}
          src={item.src}
        />
      ))}
    </section>
  );
};

export default LeeJiSooStory;
