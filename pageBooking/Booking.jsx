import ServiceTop from "../pageService.jsx/ServiceTop";
import BannerBooking from "./BannerBooking";
import FormBooking from "./FormBooking";
import CallBooking from "./CallBooking";
import BackTop from "../src/components/BackTop";

const Booking = () => {
  return (
    <>
      <BannerBooking />
      <ServiceTop />
      <FormBooking />
      <CallBooking />
      <BackTop/>
    </>
  );
};

export default Booking;
