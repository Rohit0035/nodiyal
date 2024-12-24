import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SolutionsServices = () => {
  const sliderSettings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
    arrows: true, 
    responsive: [
      {
        breakpoint: 1024, // Screen width < 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Screen width < 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const solutions = [
    { img: "assets/img/service/solu-1.jpg", title: "Cyber Security" },
    { img: "assets/img/service/solu-2.jpg", title: "Fintech" },
    { img: "assets/img/service/solu-3.jpg", title: "Entertainment" },
    { img: "assets/img/service/solu-4.jpg", title: "SaaS" },
    { img: "assets/img/service/solu-5.jpg", title: "Travel" },
    { img: "assets/img/service/solu-6.jpg", title: "Events" },
    { img: "assets/img/service/res-solu.jpg", title: "Restaurant" },
    { img: "assets/img/service/solu-7.jpg", title: "News" },
    { img: "assets/img/service/solu-8.jpg", title: "Real Estate" },
    { img: "assets/img/service/solu-9.jpg", title: "Ecommerce" },
    { img: "assets/img/service/solu-10.jpg", title: "Education" },
    { img: "assets/img/service/solu-11.jpg", title: "Agriculture" },
    { img: "assets/img/service/solu-12.jpg", title: "Healthcare" },
    { img: "assets/img/service/solu-13.jpg", title: "Social Network" },
    { img: "assets/img/service/solu-14.jpg", title: "Logistics" },
  ];

  return (
    <>
      <div className="service-area bg-relative pt-5 pb-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center">
                <h6 className="sub-title">Creative Solutions</h6>
                <h2 className="title">
                  NODIYAL  <span>Solutions</span>
                </h2>
              </div>
            </div>
          </div>
          <Slider {...sliderSettings}>
            {solutions.map((solution, index) => (
              <div key={index} className="text-center shadow soloution-bx">
                <img
                  src={solution.img}
                  alt={solution.title}
                  className="img-fluid"
                />
                <h4
                  className="p-3"
                  style={{ backgroundColor: "#101a29", color: "#fff" }}
                >
                  {solution.title}
                </h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SolutionsServices;
