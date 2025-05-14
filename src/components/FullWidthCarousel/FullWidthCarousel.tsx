import "./FullWidthCarousel.css";

const FullWidthCarousel = () => {
  return (
    <section className="container carousel-wrapper">
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <div data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1"></div>
          <div data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></div>
          <div data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></div>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://content.app-sources.com/s/810084476556330001/uploads/Images/2_3-7351171.jpg"
              className="carousel-img"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://content.app-sources.com/s/810084476556330001/uploads/Downloaded/Website2-4064083.jpg?format=webp"
              className="carousel-img"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://content.app-sources.com/s/810084476556330001/uploads/Downloaded/Website4-4063871.jpg?format=webp"
              className="carousel-img"
              alt="Slide 3"
            />
          </div>
        </div>
        <div className="carousel-control-prev no-overlay" role="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </div>
        <div className="carousel-control-next no-overlay" role="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </div>
      </div>
    </section>
  );
};

export default FullWidthCarousel;
