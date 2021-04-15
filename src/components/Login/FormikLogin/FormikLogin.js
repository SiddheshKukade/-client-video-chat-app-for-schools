import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../UserDetailsFrom/FormikControl";
import { Form } from "formik";
import "./FormikLogin.css";
function FormikLogin() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid E-mail").required("E-mail is required "),
    password: Yup.string().required("You have to give a Password "),
  });
  const onSubmit = (values) => {
    console.log("form data sumit", values);
  };
  return (
    <Formik
      className="mt-8 space-y-6"
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" className="sr-only" htmlFor="email">
                  Email address
                </label>
                <FormikControl
                  name="email"
                  control="input"
                  type="email"
                  autocomplete="email"
                  label="Enter your email Address"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <FormikControl
                  control="input"
                  type="password"
                  label="Enter your Password here"
                  name="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  autocomplete="current-password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!formik.isValid}
                className="group relative w-full flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 button-login"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikLogin;
