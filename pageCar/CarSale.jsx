import { useState } from "react";
import { Link } from "react-router-dom";
import Carbot from "./Carbot";
import BannerCar from "./BannerCar";
import BackTop from "../src/components/BackTop";
import useGetApi from "../pageCar/UseGetApi";

const CarSale = () => {
  const [data, error] = useGetApi("http://localhost:3000/products");
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  if (error) {
    return <div>Error loading data</div>;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>
      <BannerCar />
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Sales Car
          </h1>
          <div className="row">
            {data &&
              data.slice(startIndex, endIndex).map((product, index) => (
                <div className="col-lg-4 col-md-6 mb-2" key={index}>
                  <div className="rent-item mb-4">
                    <img
                      className="img-fluid mb-4"
                      src={product.image}
                      alt=""
                    />
                    <h4 className="text-uppercase mb-4">{product.title}</h4>
                    <div className="d-flex justify-content-center mb-4">
                      <div className="px-2">
                        <i className="fa fa-car text-primary mr-1"></i>
                        <span>{product.year}</span>
                      </div>
                      <div className="px-2 border-left border-right">
                        <i className="fa fa-cogs text-primary mr-1"></i>
                        <span>Auto</span>
                      </div>
                      <div className="px-2">
                        <i className="fa fa-road text-primary mr-1"></i>
                        <span>{product.distance}km</span>
                      </div>
                    </div>
                    <Link className="btn btn-primary px-3" to={`${product.id}`}>
                      ${product.price}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-outline-primary mx-2"
              onClick={() => {
                setCurrentPage(currentPage - 1);
                window.scrollTo(0, 0);
              }}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
              (_, index) => (
                <button
                  key={index}
                  className={`btn btn-outline-primary mx-2 ${
                    index + 1 === currentPage ? "active" : ""
                  }`}
                  onClick={() => {
                    setCurrentPage(index + 1);
                    window.scrollTo(0, 0);
                  }}
                >
                  {index + 1}
                </button>
              )
            )}
            <button
              className="btn btn-outline-primary mx-2"
              onClick={() => {
                setCurrentPage(currentPage + 1);
                window.scrollTo(0, 0);
              }}
              disabled={endIndex >= data.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Carbot />
      <BackTop />
    </>
  );
};

export default CarSale;
