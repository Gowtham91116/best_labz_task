import React from "react";
import { useFormik } from "formik";
import { validate } from "@/components/utils/userForm3";

const userForm3 = () => {
  const formik = useFormik({
    initialValues: {
      companyName: "",
      companyContact: "",
      companyType: "",
      companyIncome: "",
      gstNumber: "",
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
    <>
      <form onSubmit={formik.handleSubmit}>
        <p className="text-center mb-3"> Step : 3 of 3 </p>

        <h3 className="text-center mb-3 text-2xl font-bold">
          {" "}
          Company Details{" "}
        </h3>

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="companyName">
            Company Name <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="companyName"
            onChange={formik.handleChange}
            value={formik.values.companyName}
            className={`border border-gray-600 rounded-md ${
              formik.errors.companyName && "border-red-600 placeholder-red"
            }`}
            type="text"
            placeholder="SSLC"
            name="companyName"
          />
        </div>

        {formik.errors.companyName ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.companyName}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="companyContact">
            Company Contact  <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="companyContact"
            onChange={formik.handleChange}
            value={formik.values.companyContact}
            className={`border border-gray-600 rounded-md ${
              formik.errors.companyContact && "border-red-600 placeholder-red"
            }`}
            type="tel"
            placeholder="Contact"
            name="companyContact"
          />
        </div>

        {formik.errors.companyContact ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.companyContact}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="companyType">
            Company Type <sup className="text-red-700"> * </sup>{" "}
          </label>
          <select
            onChange={formik.handleChange}
            value={formik.values.companyType}
            id="companyType"
            className="border border-gray-600 rounded-md"
            name="companyType"
          >
            <option value="large"> Large </option>
            <option value="medium"> Medium </option>
            <option value="small"> Small </option>
          </select>
        </div>

        {formik.errors.companyType ? (
          <div className="text-center text-xs text-red-700 mb-2">
            {formik.errors.companyType}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="companyIncome">
            Company Income <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="companyIncome"
            onChange={formik.handleChange}
            value={formik.values.companyIncome}
            className={`border border-gray-600 rounded-md ${
              formik.errors.companyIncome && "border-red-600 placeholder-red"
            }`}
            type="number"
            placeholder="Income"
            name="companyName"
          />
        </div>

        {formik.errors.companyIncome ? (
          <div className="text-center text-xs text-red-700 mb-2">
            {formik.errors.companyIncome}
          </div>
        ) : null}

<div className="flex flex-col gap-2 mb-3">
          <label htmlFor="gstNumber">
            GST <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="gstNumber"
            onChange={formik.handleChange}
            value={formik.values.gstNumber}
            className={`border border-gray-600 rounded-md ${
              formik.errors.gstNumber && "border-red-600 placeholder-red"
            }`}
            type="number"
            placeholder="Income"
            name="companyName"
          />
        </div>

        {formik.errors.gstNumber ? (
          <div className="text-center text-xs text-red-700 mb-2">
            {formik.errors.gstNumber}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <button
            type="submit"
            className="p-1 border border-gray-700 rounded-md"
          >
            Finish
          </button>
        </div>
      </form>
    </>
  );
};

export default userForm3;
