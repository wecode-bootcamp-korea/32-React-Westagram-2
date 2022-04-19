const LeeJiSooMainTop = prop => {
  return (
    <section className="nameCon">
      <div className="imgDiv">
        <img className="name" src={prop.src} />
      </div>
      <div className="nameDiv">
        <span>{prop.userName}</span>
      </div>
    </section>
  );
};

export default LeeJiSooMainTop;
