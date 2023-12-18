import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pageAbout/About";
import Booking from "../pageBooking/Booking";
import Service from "../pageService.jsx/Service";
import Team from "../pageTeam/Team";
import Testimonial from "../pageTestimonial.jsx/Testimonial";
import Contact from "../pageContact/Contact";
import Layout from "./components/Layout";
import Login from "../pages/Login";
import CarSale from "../pageCar/CarSale";
import BookingCar from "../pageBookingCar/BookingCar";

import Backtop from ".//components/BackTop";
import PrivateRouter from "./auth/PrivateRouter";

import { CartProvider } from "./components/CartContext";
import PayMents from "../pagePayMent/PayMents";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="about" element={<About />} />
              <Route path="booking" element={<Booking />} />
              <Route path="service" element={<Service />} />
              <Route path="team" element={<Team />} />
              <Route path="testimonial" element={<Testimonial />} />
              <Route path="contact" element={<Contact />} />
              <Route path="carsale" element={<CarSale />} />
              <Route path="login" element={<Login />} />
              <Route path="carsale/:id" element={<BookingCar />} />
              <Route path="backtop" element={<Backtop />} />
              <Route path="payments" element={<PayMents />} />

              {/* Admin */}
              <Route path="dashboad" element={<PrivateRouter />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
