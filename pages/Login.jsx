import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // navigate là hook để chuyển sang chỉ có trong es6
  const navigate = useNavigate();
  // check ng dùng đã đăng nhập
  const isAuth = localStorage.getItem("isLogin");
  if (isAuth) {
    setTimeout(() => {
      navigate("/dashboad");
    }, 1500);
  }
  //b2 : Get APi từ sever
  // lấy http ở json sever khi m chạy terminal
  const urlLogin = `http://localhost:3000/login`;
  const [user, setUser] = useState();
  // setLoading là nhập trạng thái mình check xem dữ liệu lấy đc về hay chưa (khi m chưa chạy json sever thì sẽ mãi loading nên m phải chạy json sever)
  const [loading, setLoading] = useState(false);
  // b2-1 tạo 1 function để lấy api về
  const getApi = async () => {
    setLoading(true);
    const res = await axios({
      method: "get",
      url: urlLogin,
    });
    if (res) {
      setUser(res.data);
      setLoading(false);
    }
    setUser(res.data);
    // console.log(res.data[0]);
    //hien tai no trả về mảng đầu tền. -> bỏ [0] -> array object
  };

  useEffect(() => {
    getApi();
  }, []);
  // console.log(user);

  // b1 : setup Form Login
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // defaultValues la gia tri ban dau cua o input
      email: "", // email: "" la rong , neu email: "abc@gmail.com" thi UI xem hien thi ra abc@gmail.com o input email
      password: "",
    },
  }); // xem lai o bai useForm

  const onSubmit = (data) => {
    // data la du lieu khi minh log ra no se hien ra "email va pass"
    // console.log(data);
    // b2 thêm điều kiện if else khi đăng nhập để so sánh với api

    // vong map -> array object -> map lặp -> if else

    console.log(user);

    const userLogin = user.find(
      // nếu value (tham số có sẵn) nếu find thỏa mãn điều kiện value.user === data.email && value.pass === data.password sẽ lấy user và pass
      (value) => value.user === data.email && value.pass === data.password
    );

    if (userLogin) {
      // lưu vào local
      localStorage.setItem("isLogin", true);
      localStorage.setItem("userLogin", JSON.stringify(userLogin));
      console.log("susscess full");
      // hiện thông báo khi đăng nhập thành công
      toast.success("Login success", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/dashboad"); // điều hướng đến trang dashboad
      }, 1500);
    } else {
      // hiện thông báo khi đăng nhập sai
      toast.error("Login failed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    // user.map((item) => {
    //   console.log(item);
    //   if (data.email === item.user && data.password === item.pass) {
    //     // lưu vào local
    //     localStorage.setItem("isLogin", true);
    //     console.log("susscess full");
    //     // hiện thông báo khi đăng nhập thành công
    //     toast.success("Login success", {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //     setTimeout(() => {
    //       navigate("/dashboad"); // điều hướng đến trang dashboad
    //     }, 1500);
    //   } else {
    //     // hiện thông báo khi đăng nhập sai
    //     toast.error("Login failed", {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //   }
    // });
    // if (data.email === user.user && data.password === user.pass) {
    //   // lưu vào local
    //   localStorage.setItem("isLogin", true);
    //   console.log("susscess full");
    //   // hiện thông báo khi đăng nhập thành công
    //   toast.success("Login success", {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   setTimeout(() => {
    //     navigate("/dashboad"); // điều hướng đến trang dashboad
    //   }, 1500);
    // } else {
    //   // hiện thông báo khi đăng nhập sai
    //   toast.error("Login failed", {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
  };
  if (loading == true) return "loading...";

  return (
    <>
      <Form className="wrap-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Welcome to Gara-Car</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email :</Form.Label>

          <Controller // bat buoc phai co o react hook form vi controller la phan dieu khien
            control={control}
            name="email"
            rules={{
              required: true,
            }} // rules la quyen ... required: true la ko phan ko cho ng dung de trong khi nhap email...passs
            render={({ field }) => (
              <Form.Control
                {...field}
                type="email"
                placeholder="Nhập email của bạn"
              />
            )}
          />
          {errors.email && <p> Email khong duoc de trong !!! </p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu :</Form.Label>

          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Form.Control
                {...field}
                type="password"
                placeholder="Nhập mật khẩu của bạn"
              />
            )}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* // LÀm phần thông báo cho đẹp */}
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

export default Login;
