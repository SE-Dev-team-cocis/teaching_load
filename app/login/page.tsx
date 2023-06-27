"use client";
import Image from "next/image";
import Link from "next/link";
import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className="">
      <div className="login_wrapper border border-s-2 max-w-lg bg-white mt-2 rounded-md mb-5 px-3 ">
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
            Login into your account
          </h4>

          <InputField
            type="text"
            label="Username"
            name="username"
            placeholder="Enter your username"
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
          />

          <div className="flex justify-center items-center w-full">
            <button
              className="w-full text-white px-4 rounded py-2 bg-green-700 mt-2 hover:scale-95"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-3 text-dark">
          Don't have an account?{" "}
          <Link href="/signup">
            <span className="text-green-700">Register</span>
          </Link>{" "}
          here
        </p>
      </div>
    </div>
  );
};

export default Login;
