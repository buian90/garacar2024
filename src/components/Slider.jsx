import Slider from "react-slick";
import slideOne from "../../assets/img/carousel-bg-1.jpg";
import slideTwo from "../../assets/img/carousel-bg-2.jpg";
import slideThree from "../../assets/img/Ab2.jpg";
import slideFour from "../../assets/img/Ab2.jpg";

const TestSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={slideOne} alt="" />
        </div>
        <div>
          <img src={slideTwo} alt="" />
        </div>
        <div>
          <img src={slideThree} alt="" />
        </div>
        <div>
          <img src={slideFour} alt="" />
        </div>
      </Slider>
    </>
  );
};

export default TestSlider;
