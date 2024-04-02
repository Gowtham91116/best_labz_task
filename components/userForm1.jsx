import React from "react";
import { useFormik } from "formik";
import { validate } from "@/components/utils/userForm1";

const userForm1 = () => {
  const formik = useFormik({
    initialValues: {
      age:"",
      dob: "",
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

      <p className="text-center mb-3"> Step : 1 of 3 </p>


        <h3 className="text-center mb-3 text-2xl font-bold"> User Details </h3>


        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="age">
            Age<sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            id="age"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={`border border-gray-600 rounded-md ${
              formik.errors.age && "border-red-600 placeholder-red"
            }`}
            placeholder="Age"
            type="number"
            name="age"
          />
        </div>

        {formik.errors.age ? (
          <div className="text-center text-xs text-red-700">
            {formik.errors.age}
          </div>
        ) : null}
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="dob">
           Date Of Birth <sup className="text-red-700"> * </sup>{" "}
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.dob}
            id="dob"
            className="border border-gray-600 rounded-md"
            type="date"
            placeholder="Company Name"
            name="dob"
          />
        </div>

        {formik.errors.dob ? (
          <div className="text-center text-xs text-red-700 mb-2">
            {formik.errors.dob}
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

export default userForm1;
