import React from "react";
import { useFormik } from "formik";
import { validate } from "@/components/utils/userForm2";

const userForm2 = () => {
  const formik = useFormik({
    initialValues: {
      sslc: "",
      hslc: "",
      diploma: "",
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

      <p className="text-center mb-3"> Step : 2 of 3 </p>


        <h3 className="text-center mb-3 text-2xl font-bold"> Qualifications </h3>


        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="sslc">
            SSLC % <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="sslc"
            onChange={formik.handleChange}
            value={formik.values.sslc}
            className={`border border-gray-600 rounded-md ${
              formik.errors.sslc && "border-red-600 placeholder-red"
            }`}
            type="number"
            placeholder="SSLC"
            name="sslc"
          />
        </div>

        {formik.errors.sslc ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.sslc}
          </div>
        ) : null}

<div className="flex flex-col gap-2 mb-3">
          <label htmlFor="hslc">
            HSLC % <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="hslc"
            onChange={formik.handleChange}
            value={formik.values.hslc}
            className={`border border-gray-600 rounded-md ${
              formik.errors.hslc && "border-red-600 placeholder-red"
            }`}
            type="number"
            placeholder="HSLC"
            name="hslc"
          />
        </div>

        {formik.errors.hslc ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.hslc}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="diploma">
          Diplomo % <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.diploma}
            id="diploma"
            className="border border-gray-600 rounded-md"
            type="number"
            placeholder="Diplomo"
            name="diploma"
          />
        </div>

        {formik.errors.diploma ? (
          <div className="text-center text-xs text-red-700 mb-2">
            {formik.errors.diploma}
          </div>
        ) : null}

        <div className="flex flex-col gap-2 mb-3">
          <button
            type="submit"
            className="p-1 border border-gray-700 rounded-md"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default userForm2;
