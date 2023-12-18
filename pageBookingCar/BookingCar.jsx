import { Link, useNavigate, useParams } from "react-router-dom";
import BookingCarDetails from "./BookingCarDetails";
import BannerBookingCar from "./BannerBookingCar";
import BackTop from "../src/components/BackTop";
import Button from "react-bootstrap/esm/Button";
import { toast } from "react-toastify";
import { useCart } from "../src/components/CartContext";

import useGetApi from "../pageCar/UseGetApi";

const BookingCar = () => {
  const { id } = useParams();
  const [data] = useGetApi(`http://localhost:3000/products/${id}`);
  console.log(data);

  const navigate = useNavigate();
  const { increaseCartCount } = useCart();
  const handleClick = () => {
    // lay gia tri cua san pham

    const cartOld = JSON.parse(localStorage.getItem("arrayCart")) || [];

    const imgCart = document.querySelector(".img-fluid").src;
    const priceCart = document.querySelector(".price-cart").innerHTML;
    const titleCart = document.querySelector(".title-cart").innerHTML;

    const productExistsInCart = cartOld.some((item) => item.images === imgCart);

    if (productExistsInCart) {
      alert("Sản phẩm đã tồn tại trong giỏ hàng");
      return;
    }

    const newItem = {
      images: imgCart,
      price: priceCart,
      title: titleCart,
      quality: 1,
    };

    const updatedCart = [...cartOld, newItem];

    localStorage.setItem("arrayCart", JSON.stringify(updatedCart));

    toast.success("Sản phẩm đã thêm vào giỏ hàng", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/payments");
    }, 500);
  };

  return (
    <>
      <BannerBookingCar />
      {/* <!-- Detail Start --> */}
      <div className="container-fluid pt-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase mb-5 title-cart">
            {data.title}
          </h1>
          <div className="row align-items-center pb-2">
            <div className="col-lg-6 mb-4">
              <img className="img-fluid" src={data.image} alt="" />
            </div>
            <div className="col-lg-6 mb-4">
              <h4 className="mb-2 price-cart">$ {data.price}</h4>
              <div className="d-flex mb-3">
                <h6 className="mr-2">Rating:</h6>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star-half-alt text-primary mr-1"></small>
                  <small>(250)</small>
                </div>
              </div>
              <p>{data.description}</p>
              <div className="d-flex pt-1">
                <h6>Share on:</h6>
                <div className="d-inline-flex">
                  <Link className="px-2" to="">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="px-2" to="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="px-2" to="">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link className="px-2" to="">
                    <i className="fab fa-pinterest"></i>
                  </Link>
                </div>
              </div>
              <div>
                <Link className="btn-buy-now">
                  <Button onClick={handleClick}>Add to cart</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-n3 mt-lg-0 pb-4">
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-car text-primary mr-2"></i>
              <span>Model: 2015</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-cogs text-primary mr-2"></i>
              <span>Automatic</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-road text-primary mr-2"></i>
              <span>20km/liter</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-eye text-primary mr-2"></i>
              <span>GPS Navigation</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-car text-primary mr-2"></i>
              <span>Model: 2015</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-cogs text-primary mr-2"></i>
              <span>Automatic</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-road text-primary mr-2"></i>
              <span>20km/liter</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-eye text-primary mr-2"></i>
              <span>GPS Navigation</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-car text-primary mr-2"></i>
              <span>Model: 2015</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-cogs text-primary mr-2"></i>
              <span>Automatic</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-road text-primary mr-2"></i>
              <span>20km/liter</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-eye text-primary mr-2"></i>
              <span>GPS Navigation</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Detail End --> */}
      <BookingCarDetails />
      <BackTop />
    </>
  );
};

export default BookingCar;
