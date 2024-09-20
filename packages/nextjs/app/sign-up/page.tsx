"use client";

import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const Page: React.FC = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState<Inputs>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const validateInputs = (): Errors => {
    const validationErrors: Errors = {};
    if (!inputs.firstName) {
      validationErrors.firstName = "First name is required";
    }
    if (!inputs.lastName) {
      validationErrors.lastName = "Last name is required";
    }
    if (!inputs.email) {
      validationErrors.email = "Email is required";
    }
    if (!inputs.password) {
      validationErrors.password = "Password is required";
    }
    return validationErrors;
  };

  const submit = () => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      router.push("/school");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      {isSubmitted ? (
        <div role="alert" className="alert alert-success w-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your profile has been created!</span>
        </div>
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <div className="p-5 gap-2 flex flex-col">
              <label className="input input-bordered flex rounded-lg items-center gap-2">
                <input
                  type="text"
                  name="firstName"
                  value={inputs.firstName}
                  onChange={handleInputChange}
                  className="grow"
                  placeholder="First Name"
                  required
                />
                {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
              </label>
              <label className="input input-bordered flex rounded-lg items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  name="lastName"
                  value={inputs.lastName}
                  onChange={handleInputChange}
                  className="grow"
                  placeholder="Last Name"
                  required
                />
                {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
              </label>
              <label className="input input-bordered rounded-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleInputChange}
                  className="grow"
                  placeholder="Email"
                  required
                />
                {errors.email && <span className="text-red-500">{errors.email}</span>}
              </label>
              <label className="input input-bordered rounded-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  name="password"
                  value={inputs.password}
                  onChange={handleInputChange}
                  className="grow"
                  placeholder="Password"
                  required
                />
                {errors.password && <span className="text-red-500">{errors.password}</span>}
              </label>
              <button className="btn btn-active btn-neutral rounded-lg" onClick={submit}>
                Submit
              </button>
            </div>
          </div>
          <div>
            Already have an account?{" "}
            <Link className="link link-info" href={"/sign-in"}>
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
