import HeaderService from "../src/components/HeaderService";

import ServiceBot from "./ServiceBot";

import FormBooking from "../pageBooking/FormBooking";
import BackTop from "../src/components/BackTop";
import TestiCenter from "../pageTestimonial.jsx/TestiCenter";

const Service = () => {
  return (
    <>
      <HeaderService />
      <ServiceBot />
      <FormBooking />
      <TestiCenter />
      <BackTop />
    </>
  );
};

export default Service;
