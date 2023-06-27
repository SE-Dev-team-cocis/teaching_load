"use client";
import Image from "next/image";
import Link from "next/link";
import InputField from "../components/InputField";
import Select, { MultiValue } from "react-select";
import { MultiValueProps } from "react-select";

type Option = {
  [key: string]: string;
  value: string;
  label: string;
};

const Signup = () => {
  function customTheme(theme: any) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "green",
      },
    };
  }
  const options = [
    { value: "Lecturer", label: "Lecturer" },
    { value: "HoD", label: "HoD" },
    { value: "Dean", label: "Dean" },
  ];

  const roles: string[] = [];
  function handleSelect(selectedOptions: MultiValue<Option>) {
    selectedOptions.forEach((option: Option, index) => {
      roles.push(selectedOptions[index].value);
      console.log(selectedOptions[index].value);
    });

    console.log("Options", selectedOptions);
    console.log("roles", Array.from(new Set(roles)));
  }

  return (
    <div className="h-full">
      <div className="signup_wrapper border border-s-2 max-w-lg bg-white mt-2 rounded-md mb-5 px-3 ">
        <div className="flex flex-col justify-between items-center">
          <Image
            src={"/images/muk_logo.png"}
            width={150}
            height={150}
            alt="Makerere university logo"
          />
          <p className="text-center text-green-700 font-bold text-2xl">
            MAKERERE UNIVERSITY
          </p>
          <p className="text-center text-green-700 font-semibold">
            Teaching Load
          </p>
        </div>
        <form className="login_form">
          <h4 className="text-green-700 text-center text-xl font-semibold my-5">
            Create an account
          </h4>

          <div className="flex gap-2">
            <div className="w-1/2">
              <InputField type="text" label="First name" name="firstName" />
            </div>
            <div className="w-1/2">
              <InputField type="text" label="Last name" name="lastName" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-1/2">
              <InputField type="text" label="Username" name="username" />
            </div>
            <div className="w-1/2">
              <label
                htmlFor=""
                className="block font-semibold text-sm mt-2 text-gray-700"
              >
                Role
              </label>
              <Select
                options={options}
                isMulti
                isSearchable
                theme={customTheme}
                closeMenuOnSelect={false}
                onChange={handleSelect}
              />
              {/* <InputField type="text" label="Role" name="role" /> */}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-1/2">
              <InputField type="text" label="Department" name="department" />
            </div>
            <div className="w-1/2">
              <InputField
                type="text"
                label="Contact"
                name="contact"
                placeholder="eg. +256786..."
              />
            </div>
          </div>

          <InputField
            type="email"
            label="Email"
            name="email"
            placeholder="Enter your email address"
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
          />
          <InputField
            type="password"
            label="Comfirm Password"
            name="confirmPassword"
            placeholder="Please confirm your password"
          />

          <div className="flex justify-center items-center w-full">
            <button
              className="w-full text-white px-4 rounded py-2 bg-green-700 mt-2 hover:scale-95"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-3 text-dark">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-green-700">Login</span>
          </Link>{" "}
          here
        </p>
      </div>
    </div>
  );
};

export default Signup;
