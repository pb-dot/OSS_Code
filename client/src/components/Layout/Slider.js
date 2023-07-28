import React from "react";

const Slider = () => {
  return (
    <div
      style={{
        marginBottom: "2px",
        marginTop: "2px",
      }}
    >
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={5000}>
            <img
              src="/images/header1.jpeg"
              className="d-block w-100"
              alt="/images/header1.jpeg"
              height="200px"
            />
          </div>
          <div className="carousel-item" data-bs-interval={4000}>
            <img
              src="/images/header2.jpeg"
              className="d-block w-100 "
              alt="/images/header1.jpeg"
              height="200px"
            />
          </div>
          <div className="carousel-item" data-bs-interval={4000}>
            <img
              src="/images/header3.jpeg"
              className="d-block w-100 "
              alt="/images/header1.jpeg"
              height="200px"
            />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="/images/header4.jpeg"
              className="d-block w-100 "
              alt="/images/header1.jpeg"
              height="200px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
