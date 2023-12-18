import { Link } from "react-router-dom";
import img from "../assets/img/Ab2.jpg";
const BannerContact = () => {
  return (
    <>
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: `url('${img}')` }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Contact
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Pages</Link>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContact;
