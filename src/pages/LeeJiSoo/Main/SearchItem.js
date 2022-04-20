import LeeJiSooCard from './Aside/LeeJiSooCard';
const Search = ({ filteredItem }) => {
  console.log('서치컴포넌트', filteredItem);
  return (
    <div className="searchList">
      <div className="spanCon">
        <span>최근 검색항목</span>
      </div>

      <ul>
        {filteredItem.map(item => (
          <li>
            <LeeJiSooCard
              userName={item.userName}
              content={item.recommand}
              src={item.src}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
