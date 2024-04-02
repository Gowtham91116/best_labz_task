import React from "react";
import { useFormik } from "formik";
import { validate } from "@/components/utils/RegisterValidation";

const CreateProducts = () => {
  const formik = useFormik({
    initialValues: {
      productName: "",
      productType: "",
      productVarient: ""
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
          Product Name <sup className="text-red-700"> * </sup>{" "}
        </label>
        <input
          id="productName"
          onChange={formik.handleChange}
          value={formik.values.productName}
          className={`border border-gray-600 rounded-md ${
            formik.errors.productName && "border-red-600 placeholder-red"
          }`}
          type="text"
          placeholder="Product Name"
          name="productName"
        />
      </div>

      {formik.errors.productName ? (
        <div className="text-center text-xs text-red-700">
          {formik.errors.productName}
        </div>
      ) : null}

      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="productType"> Product Type </label>
        <input
          id="productType"
          onChange={formik.handleChange}
          value={formik.values.productType}
          className={`border border-gray-600 rounded-md ${
            formik.errors.productType && "border-red-600 placeholder-red"
          }`}
          type="text"
          placeholder="Product Type"
          name="productType"
        />
      </div>

      {formik.errors.productType ? (
        <div className="text-center text-xs text-red-700">
          {formik.errors.productType}
        </div>
      ) : null}

      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="productVarient">
         Product Varient <sup className="text-red-700"> * </sup>{" "}
        </label>
        <input
          id="productVarient"
          onChange={formik.handleChange}
          value={formik.values.productVarient}
          className={`border border-gray-600 rounded-md ${
            formik.errors.productVarient && "border-red-600 placeholder-red"
          }`}
          type="productVarient"
          placeholder="Product Varient"
          name="productVarient"
        />
      </div>

      {formik.errors.productVarient ? (
        <div className="text-center text-xs text-red-700">
          {formik.errors.email}
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

export default CreateProducts;
