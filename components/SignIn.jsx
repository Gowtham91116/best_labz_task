import React from "react";
import { useFormik } from "formik";
import { validate } from "@/components/utils/LoginValidation";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
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
      <h3 className="text-center mb-3 text-2xl font-bold"> Login </h3>

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
        <label htmlFor="password">
          {" "}
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
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignIn;
