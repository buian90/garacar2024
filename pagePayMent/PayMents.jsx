import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import PaymentForm from "./PayMentsForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table } from "react-bootstrap";
import 'boxicons'

const PayMents = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("arrayCart")) || []
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Gửi dữ liệu lên server hoặc thực hiện các xử lý khác
    console.log(data); // Dữ liệu của form
  };

  const [productQuantities, setProductQuantities] = useState({});

  const increment = (productId) => {
    const updatedCart = cart.map((item, index) =>
      index === productId ? { ...item, quality: item.quality + 1 } : item
    );
    localStorage.setItem("arrayCart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const decrement = (productId) => {
    const updatedCart = cart.map((item, index) =>
      index === productId && item.quality > 0
        ? { ...item, quality: item.quality - 1 }
        : item
    );
    localStorage.setItem("arrayCart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item, index) => index !== productId);
    localStorage.setItem("arrayCart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  useEffect(() => {
    const initialQuantities = {};
    cart.forEach((item, index) => {
      initialQuantities[index] = item.quality;
    });
    setProductQuantities(initialQuantities);
  }, [cart]);

  const total = cart.reduce((acc, item, index) => {
    const priceNumber = item.price
      ? parseFloat(item.price.replace("$", ""))
      : 0;
    const productTotal = priceNumber * (productQuantities[index] || 0);
    return acc + productTotal;
  }, 0);

  return (
    <>
          <div className="paymentsform">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} className="payments1">
            <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="pay-input">
                          <label>Name</label>
                          <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Name is required" }}
                            render={({ field }) => (
                              <div>
                                <input {...field} />

                                {errors.name && <p>{errors.name.message}</p>}
                              </div>
                            )}
                          />
                        </div>

                        <div className="pay-input">
                          <label>Email</label>
                          <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address",
                              },
                            }}
                            render={({ field }) => (
                              <div>
                                <input {...field} />
                                {errors.email && <p>{errors.email.message}</p>}
                              </div>
                            )}
                          />
                        </div>

                        <div className="pay-input">
                          <label>Address</label>
                          <Controller
                            name="address"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Address is required" }}
                            render={({ field }) => (
                              <div>
                                <input {...field} />
                                {errors.address && (
                                  <p>{errors.address.message}</p>
                                )}
                              </div>
                            )}
                          />
                        </div>

                        <div className="pay-input">
                          <label>Phone</label>
                          <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Phone is required" }}
                            render={({ field }) => (
                              <div>
                                <input {...field} />
                                {errors.phone && <p>{errors.phone.message}</p>}
                              </div>
                            )}
                          />
                        </div>

                        {/* Thêm các trường khác và logic validation tương tự */}
                      </form>
              <PaymentForm />
            </Col>
            <Col sm={12} md={6} lg={6} className="payments2">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Images</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length > 0 &&
                    cart.map((item, index) => {
                      const priceNumber = item.price
                        ? parseFloat(item.price.replace("$", ""))
                        : 0;
                      const productTotal =
                        priceNumber * (productQuantities[index] || 0);

                      return (
                        <tr key={item} className="bg-product">
                          <td className="images-product">
                            <img src={item.images} alt={item.title} />
                          </td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>${productTotal.toFixed(2)}</td>
                          <td className="quantity-product">
                            <div className="pay-count">
                              <button onClick={() => decrement(index)}>
                                -
                              </button>
                              <input
                                id="price-number-product"
                                type="number"
                                value={productQuantities[index] || 0}
                                min={0}
                                readOnly
                              />
                              <button onClick={() => increment(index)}>
                                +
                              </button>
                            </div>
                          </td>

                          <td>
                            <div className="trash-cart">
                            <button onClick={() => removeFromCart(index)}>
                              <box-icon name="trash"></box-icon>
                            </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
              <h4>Total: ${total.toFixed(2)}</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PayMents;
