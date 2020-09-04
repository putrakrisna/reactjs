import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../action";

const Login = ({ setOpen }) => {
  const dispatch = useDispatch();
  return (
    <>
      
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={() =>
          dispatch(
            login({
              email: "krisna@icube.us",
              name: "mas X",
              fullname: "Krisna Putra"
            })
          )
        }
      >
        {({
          values,
          handleChange,
          handleSubmit
          /* and other goodies */
        }) => (
          <div>
            <div className="block block-customer-login">
            <h3>Registered Customer</h3>
      <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            <button type="submit">Login</button>
            
          </form>
            </div>
            <div className="block block-new-customer">
            <h3>New Customer</h3>
            <hr />
            <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.

</p>
            <button onClick={() => setOpen(true)}>Register</button>
            </div>
            
          </div>
          
        )}
      </Formik>
    </>
  );
};

export default Login;
