import { useEffect, useState } from "react";
import TableProduct from "./common/TableProduct";
import axios from "axios";

const ProductsAdmin = () => {
  // 1 - call api để sửa xóa sản phẩm (copy từ trang listingproduce sang )
  const [data, setData] = useState([]); //1.Để đổ API về ta tạo State : const [data , setData] = useState([]) trong đó State là mảng rỗng

  const getApi = async () => {
    //3. tạo const getApi async () => nhận res await là để đợi res gọi Api về đủ dữ liệu mới trả về getApi
    const res = await axios({
      method: "get",

      url: "http://localhost:3000/products",
    });
    return setData(res.data); //7.return là trả về - setdata là hook của useState nó lưu lại giá trị mới cho state
  };
  //2.Dùng useEffect để load trang chỉ load
  //2. ở useEffect nhận 2 giá trị : 1 là arrow function () =>
  //    arrow function để call api. Khi để () => rỗng thì sẽ call api liên tục về máy
  //                                2 là mảng rỗng để call api 1 lần
  //4. trong () => có const res = axios ({})
  //    trong axios có phương thức method : "get" để lấy api về
  useEffect(() => {
    //    trong axios có url:".copy đường link api vào." - url là đường link để lấy api
    getApi(); //5. getApi() là tên function gọi lại vì ở dòng8 getApi là 1 function nên phải gọi lại để trả ra kết quả
    //6. phải ipmort axios và useState useEffect
  }, []);
  
  return (
    <>
      <h3 className="text-center mt-4 my-4">List Car</h3>
      {/* text-center mt-4 my-4 là cú pháp cho chữ ra giữa và mt my là margintop - marginbottom */}
      {/* dataTable={data} là dữ liệu lấy từ api về và mình sẽ truyền kiểu prop cho trang TableProduct hiển thị */}
      {/* getApi={getApi()} tương tự như dataTable và truyền xuống trang TableProduct */}
      <TableProduct dataTable={data} getApi={getApi} />
    </>
  );
};

export default ProductsAdmin;
