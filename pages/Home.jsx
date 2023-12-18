import BackTop from "../src/components/BackTop";

import TestSlider from "../src/components/Slider";

import Fact from "./Fact";

import ServiceBot from "../pageService.jsx/ServiceBot";
import ServiceTop from "../pageService.jsx/ServiceTop";

import FormBooking from "../pageBooking/FormBooking";
import AboutCenter from "../pageAbout/AboutCenter";
import TeamCenter from "../pageTeam/TeamCenter";
import TestiCenter from "../pageTestimonial.jsx/TestiCenter";

const Home = () => {
  return (
    <>
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}

      <TestSlider />
      <ServiceTop />
      <AboutCenter />
      <Fact />
      <ServiceBot />
      <FormBooking />
      <TeamCenter />
      <TestiCenter />
      <BackTop />
    </>
  );
};

export default Home;
