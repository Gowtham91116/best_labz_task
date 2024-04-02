import React from "react";
import { useFormik } from "formik";
import { validate } from "@/components/utils/RegisterValidation";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("your-api-endpoint-url", values);
        alert(JSON.stringify(response.data, null, 2));
      } catch (error) {
        alert("Error submitting the form. Please try again later.");
        console.error("API call failed:", error);
      }
    },
  });

  return (
    
    <form
      onSubmit={formik.handleSubmit}
      
    >
      <h3 className="text-center mb-3 text-2xl font-bold"> Sign Up </h3>

      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="firstName">
          {" "}
          Firstname <sup className="text-red-700"> * </sup>{" "}
        </label>
        <input
          id="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className={`border border-gray-600 rounded-md ${
            formik.errors.firstName && "border-red-600 placeholder-red"
          }`}
          type="text"
          placeholder="Firstname"
          name="firstName"
        />
      </div>

      {formik.errors.firstName ? (
        <div className="text-center text-xs text-red-700">
          {formik.errors.firstName}
        </div>
      ) : null}

      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="lastName"> Lastname </label>
        <input
          id="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          className={`border border-gray-600 rounded-md ${
            formik.errors.lastName && "border-red-600 placeholder-red"
          }`}
          type="text"
          placeholder="Lastname"
          name="lastName"
        />
      </div>

      {formik.errors.lastName ? (
        <div className="text-center text-xs text-red-700">
          {formik.errors.lastName}
        </div>
      ) : null}

      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="email">
          {" "}
          E-Mail <sup className="text-red-700"> * </sup>{" "}
        </label>
        <input
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={`border border-gray-600 rounded-md ${
            formik.errors.email && "border-red-600 placeholder-red"
          }`}
          type="email"
          placeholder="E-Mail"
          name="email"
        />
      </div>

      {formik.errors.email ? (
        <div className="text-center text-xs text-red-700">
          {formik.errors.email}
        </div>
      ) : null}

      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="contact">
          {" "}
          Contact <sup className="text-red-700"> * </sup>{" "}
        </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.contact}
          id="contact"
          className={`border border-gray-600 rounded-md ${
            formik.errors.contact && "border-red-600 placeholder-red"
          }`}
          type="tel"
          placeholder="Contact"
          name="contact"
        />
      </div>

      {formik.errors.contact ? (
        <div className="text-center text-xs text-red-700">
          {formik.errors.contact}
        </div>
      ) : null}

      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="password">
          Password <sup className="text-red-700"> * </sup>{" "}
        </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          id="password"
          className="border border-gray-600 rounded-md"
          type="password"
          placeholder="Password"
          name="password"
        />
      </div>

      {formik.errors.password ? (
        <div className="text-center text-xs text-red-700 mb-2">
          {formik.errors.password}
        </div>
      ) : null}

      <div className="flex flex-col gap-2 mb-3">
        <button type="submit" className="p-1 border border-gray-700 rounded-md">
          {" "}
          Submit{" "}
        </button>
      </div>
    </form>
  );
};

export default Register;
