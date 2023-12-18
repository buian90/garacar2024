import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
// import show edit
import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import FormProduct from "./FormProduct";
import { toast } from "react-toastify";

const TableProduct = ({ dataTable, getApi }) => {
  // 1.dataTable và getApi truyền từ trang productAdmin sang
  const [oldData, setoldData] = useState();
  // 1. dataTable.dataTable vì mình truyền xuống prop và m lại bọc vào TableProduct nên m phải dẫn đến                                          // 1. log (dataTable.dataTable) ra để mình xem đúng mảng mình cần chưa

  //5.2 tạo hàm xử lý sự kiện handleXoa
  const handleXoa = async (id) => {
    //5.3 truyền id vào handleXoa và alert (id)
    try {
      await axios({
        method: "delete",
        url: `http://localhost:3000/products/${id}`, //5.4 dùng try / catch để tránh lỗi nếu xử lý đúng sẽ chạy ở phần try - nếu lỗi thì catch sẽ báo ra cho mình
      });
      getApi();
      toast.success("Delete success!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
      toast.error("Delete false!", {
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
  };

  // setting show edit
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setoldData(item);
    setShow(true);
  };
  console.log(dataTable, "dataTable");
  return (
    <div className="wrap-form-admin">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.length > 0 &&
            dataTable.map((item, index) => {
              //2.  {dataTable.length && dataTable.map((item) => {...})} vì data là object nên sẽ dùng map để hiển thị data
              //3.1 copy thẻ tr vào {}
              //3.2 thêm key={item.id} ở return để hiển thị
              return (
                //4.1 tương ứng với thẻ <th> thì mình sửa thành {item....} cho thẻ <td>
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.price} $</td>

                  <td>
                    <Button variant="link" onClick={() => handleShow(item)}>
                      Edit
                    </Button>
                    <Button variant="link" onClick={() => handleXoa(item.id)}>
                      Delete
                    </Button>
                    {/* 5.1 tạo sự kiện onClick... trong onClick có arrow function  */}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {/* setting show edit */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Product</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormProduct oldData={oldData} setShow={setShow} getApi={getApi} />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default TableProduct;
