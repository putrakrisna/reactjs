import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/action/user";
import { useFormik } from "formik";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import * as Yup from "yup";

const Register = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [phoneValue, setValue] = useState();
  const RegisterSchemaValidation = Yup.object().shape({
    fullname: Yup.string()
      .min(5, "fullname Too Short!")
      .max(50, "fullname Too Long!")
      .required("fullname is required"),
    email: Yup.string()
      .email("email not valid")
      .required("email is required"),
    password: Yup.string()
      .min(5, "password min 5 caracter")
      .required("password is required")
  });
  const formRegister = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      phone: ""
    },
    validationSchema: RegisterSchemaValidation,
    onSubmit: (values) => {
      dispatch(register(values));
    }
  });
  return (
    
    <form onSubmit={formRegister.handleSubmit}>
      <h3>Create New Customer Account</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "50%",
          padding: 20
        }}
      >
        <input
          type="fullname"
          name="fullname"
          placeholder="full name"
          onChange={formRegister.handleChange}
          value={formRegister.values.fullname}
          style={{ marginBottom: 20 }}
        />
        {formRegister.touched.fullname && formRegister.errors.fullname && (
          <p style={{ color: "red" }}>{formRegister.errors.fullname}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={formRegister.handleChange}
          value={formRegister.values.email}
          style={{ marginBottom: 20 }}
        />
        {formRegister.errors.email && (
          <p style={{ color: "red" }}>{formRegister.errors.email}</p>
        )}
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={formRegister.handleChange}
          value={formRegister.values.password}
          style={{ marginBottom: 20 }}
        />
        {formRegister.errors.password && (
          <p style={{ color: "red" }}>{formRegister.errors.password}</p>
        )}
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          pattern="[0-9]{12}"
          placeholder="phone number"
          onChange={formRegister.handleChange}
          value={formRegister.values.phone}
        />
        {formRegister.errors.phone && (
          <p style={{ color: "red" }}>{formRegister.errors.phone}</p>
        )}
      </div>
      <button type="submit">Register</button>
      <br />
    </form>
  );
};

export default Register;
