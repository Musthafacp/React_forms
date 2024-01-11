import React from "react";
import { useFormik } from "formik";

function Forms() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
    },
    onSubmit: (values) => {
      if (formik.isValid) {
        console.log(values);
        formik.setStatus("Submission successful!");
      }
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "First Name is required";
      }

      if (!values.lastName) {
        errors.lastName = "Last Name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address format";
      }

      if (!values.contact) {
        errors.contact = "Contact is required";
      }

      return errors;
    },
  });

  return (
    <div>
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          {formik.status && (
            <div className="success-message">{formik.status}</div>
          )}
          <div className="Box">
            <div className="label-box">
              <label htmlFor="firstname">First Name</label>
            </div>
            <input
              type="text"
              id="firstname"
              name="firstName"
              className="inputBox"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            <p className="error-box">
              {formik.touched.firstName && formik.errors.firstName}
            </p>
          </div>

          <div className="Box">
            <div className="label-box">
              <label htmlFor="lastname">Last Name</label>
            </div>
            <input
              type="text"
              id="lastname"
              name="lastName"
              className="inputBox"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            <p className="error-box">
              {formik.touched.lastName && formik.errors.lastName}
            </p>
          </div>

          <div className="Box">
            <div className="label-box">
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="inputBox"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <p className="error-box">
              {formik.touched.email && formik.errors.email}
            </p>
          </div>

          <div className="Box">
            <div className="label-box">
              <label htmlFor="contact">Contact</label>
            </div>
            <input
              type="number"
              id="contact"
              name="contact"
              className="inputBox"
              value={formik.values.contact}
              onChange={formik.handleChange}
            />
            <p className="error-box">
              {formik.touched.contact && formik.errors.contact}
            </p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Forms;
