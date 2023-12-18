// import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { useCart } from "./CartContext";

const Header = () => {
  const { cartCount } = useCart();
  // console.log(cartCount);
  const cart = JSON.parse(localStorage.getItem("arrayCart"));
  const navigate = useNavigate();
  // Kiem tra xem nguoi dung dang nhap chua: isLogin -> true: dang xuat, false: dang nhap
  const isAuth = localStorage.getItem("isLogin");
  const isInfo = JSON.parse(localStorage.getItem("userLogin"));

  console.log(isInfo);
  console.log(isAuth);
  // khi bấm vào đăng xuất
  const handleLogOut = () => {
    // xóa trạng thái đăng nhập trong local
    localStorage.removeItem("isLogin");
    toast.success("Sign out success", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // điều hướng về trang chủ
    setTimeout(() => {
      Navigate("/");
    }, 1500);
  };
  return (
    <>
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>123 Street, New York, USA</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <Link
                className="btn btn-sm-square bg-white text-primary me-1"
                to=""
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                className="btn btn-sm-square bg-white text-primary me-1"
                to=""
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                className="btn btn-sm-square bg-white text-primary me-1"
                to=""
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                className="btn btn-sm-square bg-white text-primary me-1"
                to=""
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa fa-car me-3"></i>CarServ
          </h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="carsale" className="nav-item nav-link">
              Car
            </Link>
            <Link to="about" className="nav-item nav-link">
              About
            </Link>
            <Link to="service" className="nav-item nav-link">
              Services
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu fade-up m-0">
                <Link to="booking" className="dropdown-item">
                  Booking
                </Link>
                <Link to="team" className="dropdown-item">
                  Technicians
                </Link>
                <Link to="testimonial" className="dropdown-item">
                  Testimonial
                </Link>
                <Link to="notfound" className="dropdown-item">
                  404 Page
                </Link>
              </div>
            </div>
            <Link to="contact" className="nav-item nav-link">
              Contact
            </Link>

            <Link to="cart" className="nav-item nav-link" />
          

            <Link
              to={{
                pathname: "/payments",
                state: { cartItemCount: cartCount },
              }}
              className="nav-item nav-link"
              id="Cart"
            >
              <i className="bi bi-cart-plus"></i>
              <span className="cout-cart"> {cart ? cart.length : 0}</span>
            </Link>
          </div>
          {isAuth ? (
            <>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
                >
                  <i className="bi bi-person-circle"></i>
                </Link>
                <div className="dropdown-menu fade-up m-0">
                  <Link className="dropdown-item" style={{ color: "red" }}>
                    Hi, <span>{isInfo.name}</span> !
                  </Link>
                  <Link to="dashboad" className="dropdown-item">
                    Dashboad
                  </Link>

                  <Link
                    to="login"
                    className="dropdown-item"
                    onClick={handleLogOut}
                  >
                    LogOut
                  </Link>
                </div>
              </div>

              {/* <Link
                to="/"
                className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
                onClick={handleLogOut}
              >
                LogOut <i className="fa fa-arrow-right ms-3"></i>
              </Link> */}
            </>
          ) : (
            <>
              <Link
                to="login"
                className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
              >
                LogIn<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </>
          )}
        </div>
      </nav>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Header;

// ShoppingCart -> gio hang -> Thanh toán -> click -> Thanh Toan (có form và thẻ ...)
//
// {/* <div className="box-login">
// {/* <img src={`${isInfo.image}`} alt="" />  muốn thêm ảnh ng dùng*/}
// <ul>
//   <li>
//     <Link
//       to="/"
//       className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
//       onClick={handleLogOut}
//     >
//       Hello <span>{isInfo.name}</span> !
//     </Link>
//     <li>
//       <Link to="/">Dashboad</Link>
//     </li>
//   </li>
// </ul>
// </div> */}
