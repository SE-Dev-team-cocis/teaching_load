"use client";
import React, { MutableRefObject, forwardRef } from "react";

interface InputProps {
  type: string;
  label?: string;
  placeholder?: string;
  name: string;
  ref?: MutableRefObject<null>;
  value?: string | undefined;
  options?: string[];
  classes?: string;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, placeholder, name, options, value, classes }, ref) => {
    return (
      <>
        <label
          htmlFor={name}
          className="block font-semibold text-sm mt-2 text-gray-700"
        >
          {label}
        </label>

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          name={name}
          className={`focus:outline-none focus:ring-1 focus:ring-green-700 shadow-sm py-2 px-4  border border-gray focus:border-teal-500 w-full rounded ${classes}`}
          autoComplete="off"
        />
      </>
    );
  }
);

export default InputField;
