import React from "react";
import { useFormik } from "formik";
import { validate } from "@/components/utils/vendor";

const CreateVendor = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      vendorContact: "",
      vendorAge: "",
      vendorDob: "",
      vendorSslc: "",
      vendorHslc: "",
      vendorDiploma: "",
      vendorCompanyName: "",
      vendorCompanyContact: "",
      vendorCompanyType: "",
      vendorCompanyIncome: "",
      vendorGstNumber: "",
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

        <h3 className="text-center mb-3 text-2xl font-bold"> Create Vendor </h3>

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="username">
            username <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            className={`border border-gray-600 rounded-md ${
              formik.errors.username && "border-red-600 placeholder-red"
            }`}
            type="text"
            placeholder="Username"
            name="username"
          />
        </div>

        {formik.errors.username ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.username}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="vendorContact">
            Contact <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.vendorContact}
            id="vendorContact"
            className={`border border-gray-600 rounded-md ${
              formik.errors.vendorContact && "border-red-600 placeholder-red"
            }`}
            type="tel"
            placeholder="Contact"
            name="vendorContact"
          />
        </div>
        {formik.errors.vendorContact ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.vendorContact}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="vendorAge">
            Age<sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="vendorAge"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={`border border-gray-600 rounded-md ${
              formik.errors.vendorAge && "border-red-600 placeholder-red"
            }`}
            placeholder="Age"
            type="number"
            name="vendorAge"
          />
        </div>

        {formik.errors.vendorAge ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.vendorAge}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="vendorDob">
            Date Of Birth <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.vendorDob}
            id="vendorDob"
            className="border border-gray-600 rounded-md"
            type="date"
            placeholder="Company Name"
            name="vendorDob"
          />
        </div>

        {formik.errors.vendorDob ? (
          <div className="text-center text-xs text-red-700 mb-2">
            {formik.errors.vendorDob}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="vendorSslc">
            SSLC % <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="vendorSslc"
            onChange={formik.handleChange}
            value={formik.values.vendorSslc}
            className={`border border-gray-600 rounded-md ${
              formik.errors.vendorSslc && "border-red-600 placeholder-red"
            }`}
            type="number"
            placeholder="SSLC"
            name="vendorSslc"
          />
        </div>

        {formik.errors.vendorSslc ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.vendorSslc}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="vendorHslc">
            HSLC % <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="vendorHslc"
            onChange={formik.handleChange}
            value={formik.values.vendorHslc}
            className={`border border-gray-600 rounded-md ${
              formik.errors.vendorHslc && "border-red-600 placeholder-red"
            }`}
            type="number"
            placeholder="HSLC"
            name="hslc"
          />
        </div>

        {formik.errors.vendorHslc ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.vendorHslc}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="vendorDiploma">
            Diplomo % <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.vendorDiploma}
            id="vendorDiploma"
            className="border border-gray-600 rounded-md"
            type="number"
            placeholder="Diplomo"
            name="vendorDiploma"
          />
        </div>

        {formik.errors.vendorDiploma ? (
          <div className="text-center text-xs text-red-700 mb-2">
            {formik.errors.vendorDiploma}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="vendorCompanyName">
            Company Name <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="vendorCompanyName"
            onChange={formik.handleChange}
            value={formik.values.vendorCompanyName}
            className={`border border-gray-600 rounded-md ${
              formik.errors.vendorCompanyName &&
              "border-red-600 placeholder-red"
            }`}
            type="text"
            placeholder="Company name"
            name="vendorCompanyName"
          />
        </div>

        {formik.errors.vendorCompanyName ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.vendorCompanyName}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="vendorCompanyContact">
            Company Contact <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="vendorCompanyContact"
            onChange={formik.handleChange}
            value={formik.values.vendorCompanyContact}
            className={`border border-gray-600 rounded-md ${
              formik.errors.vendorCompanyContact &&
              "border-red-600 placeholder-red"
            }`}
            type="tel"
            placeholder="Contact"
            name="vendorCompanyContact"
          />
        </div>

        {formik.errors.vendorCompanyContact ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.vendorCompanyContact}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="vendorCompanyType">
            Company Type <sup className="text-red-700"> * </sup>
          </label>
          <select
            onChange={formik.handleChange}
            value={formik.values.vendorCompanyType}
            id="vendorCompanyType"
            className="border border-gray-600 rounded-md"
            name="vendorCompanyType"
          >
            <option value="large"> Large </option>
            <option value="medium"> Medium </option>
            <option value="small"> Small </option>
          </select>
        </div>

        {formik.errors.vendorCompanyType ? (
          <div className="text-center text-xs text-red-700 mb-2">
            {formik.errors.vendorCompanyType}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="vendorCompanyIncome">
            Company Income <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="vendorCompanyIncome"
            onChange={formik.handleChange}
            value={formik.values.vendorCompanyIncome}
            className={`border border-gray-600 rounded-md ${
              formik.errors.vendorCompanyIncome &&
              "border-red-600 placeholder-red"
            }`}
            type="number"
            placeholder="Income"
            name="companyName"
          />
        </div>

        {formik.errors.vendorCompanyIncome ? (
          <div className="text-center text-xs text-red-700 mb-2">
            {formik.errors.vendorCompanyIncome}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="vendorGstNumber">
            GST <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="vendorGstNumber"
            onChange={formik.handleChange}
            value={formik.values.vendorGstNumber}
            className={`border border-gray-600 rounded-md ${
              formik.errors.vendorGstNumber && "border-red-600 placeholder-red"
            }`}
            type="number"
            placeholder="Income"
            name="companyName"
          />
        </div>

        {formik.errors.vendorGstNumber ? (
          <div className="text-center text-xs text-red-700 mb-2">
            {formik.errors.vendorGstNumber}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <button
            type="submit"
            className="p-1 border border-gray-700 rounded-md"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateVendor;
