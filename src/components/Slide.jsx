export const Slide = ({ data }) => {
  return (
    <div
      className="slide"
      data-testid='slide'
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    >
      <div className="slide-row">
        <div className="slide-content">
          <div className="slide-left">
            <h1 className="slide__title">{data.title}</h1>
            <p className="slide__subtitle">{data.subtitle}</p>
          </div>
          <div className="slide-right">
            <p className="slide__text">{data.text}</p>
            <p className="slide__subtext">{data.subtext}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
