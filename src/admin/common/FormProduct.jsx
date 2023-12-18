import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FormProduct = ({ oldData, setShow, getApi }) => {
  console.log(oldData, 'oldData');

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: oldData.title ?? "",
      //A ? B : C
    },
  });

  const onSubmit = (data) => {
    if (data) {
      axios({
        method: "patch",
        url: `http://localhost:3000/products/${oldData.id}`,
        data: {
          title: data.title,
          price: data.price,
        },
      })
        .then(() => {
          getApi();
          toast.success("Update success!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Update false!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
    setShow(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>

          <Controller
            control={control}
            name="title"
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Form.Control
                {...field}
                type="text"
                placeholder="Nhập tên sản phẩm của bạn"
              />
            )}
          />
          {errors.title && <p>Ten SP khong duoc de trong!</p>}
          <Form.Label>Price</Form.Label>
          <Controller
            control={control}
            name="price"
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Form.Control
                {...field}
                type="text"
                placeholder="Nhập giá sản phẩm của bạn"
              />
            )}
          />
          {errors.price && <p>Giá SP khong duoc de trong!</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </>
  );
};

export default FormProduct;
