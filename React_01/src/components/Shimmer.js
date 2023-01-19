const Shimmer = () => {
  return (
    <>
      {Array(50)
        .fill("")
        .map((e, index) => (
          <div className="_shimmer_card" key={index}>
            <div className="_shimmer_img_block"> </div>
            <div className="text_big"></div>
            <div className="text_short"></div>
            <div className="text_short_short"></div>
          </div>
        ))}
    </>
  );
};

export default Shimmer;
