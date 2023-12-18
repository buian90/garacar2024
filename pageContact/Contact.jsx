import BannerContact from "./BannerContact";
import BackTop from "../src/components/BackTop"
const Contact = () => {
  
  return (
    <>
      <BannerContact />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">/ Contact Us /</h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">/ Booking /</h5>
                    <p className="m-0">
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      book@example.com
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">/ General /</h5>
                    <p className="m-0">
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      info@example.com
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">/ Technical /</h5>
                    <p className="m-0">
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      tech@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s"></div>
            <div className="col-md-6"></div>
          </div>
          <div className="map-contact">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29786.92169857512!2d105.80322219999762!3d21.058070808243443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aafe7260066b%3A0x4c2c988309aaa3db!2zSOG7kyBUw6J5!5e0!3m2!1svi!2s!4v1691293192546!5m2!1svi!2s"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <BackTop />
    </>
  );
};

export default Contact;
