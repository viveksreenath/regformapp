import { useState } from "react";
import "./App.css";
import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    pincode: "",
  });

  const onChangeFields = async (e, field) => {
    let val = e.target.value;
    if (field == "firstname") {
      setDetails({ ...details, firstname: val });
    } else if (field == "lastname") {
      setDetails({ ...details, lastname: val });
    } else if (field == "email") {
      setDetails({ ...details, email: val });
    } else if (field == "phone") {
      setDetails({ ...details, phone: parseInt(val) });
    } else if (field == "pincode") {
      setDetails({ ...details, pincode: val });
    }
  };

  const onFinish = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/register/",
        details
      );
      notify(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const notify = (message) => toast.success(message);
  return (
    <>
      <ToastContainer />
      <div>
        <p>Registration Form</p>
      </div>
      <Form
        name="application"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Firstname"
          name="firstname"
          rules={[
            {
              required: true,
              min: 3,
              message: "Please input your Firstname!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              onChangeFields(e, "firstname");
            }}
          />
        </Form.Item>

        <Form.Item
          label="Lastname"
          name="lastname"
          rules={[
            {
              required: true,
              min: 2,
              message: "Please input your Lastname!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              onChangeFields(e, "lastname");
            }}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email Id!",
            },
          ]}
        >
          <Input
            type="Email"
            onChange={(e) => {
              onChangeFields(e, "email");
            }}
          />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              len: 11,
              type: Number,
              message: "Please input your Phone Number!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              onChangeFields(e, "phone");
            }}
          />
        </Form.Item>

        <Form.Item
          label="Postal Code"
          name="pincode"
          rules={[
            {
              required: true,
              message: "Please input your Postal Code!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              onChangeFields(e, "pincode");
            }}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default App;
