"use client";
import React, { useState, ChangeEvent } from "react";
import InputField from "./InputField";

interface CourseUnit {
  id: number;
  courseCode: string;
  courseName: string;
  creditUnits: number;
  isChecked: boolean;
}

const CourseUnits = () => {
  const initialCourseUnits: CourseUnit[] = [
    {
      id: 1,
      courseCode: "BSE 2204",
      courseName: "Requirements Engineering",
      creditUnits: 3,
      isChecked: false,
    },
    {
      id: 2,
      courseCode: "BSE 2204",
      courseName: "Numerical Methods",
      creditUnits: 3,
      isChecked: false,
    },
    {
      id: 3,
      courseCode: "BSE 2203",
      courseName: "Object Oriented Programming",
      creditUnits: 3,
      isChecked: false,
    },
    {
      id: 4,
      courseCode: "BSE 2293",
      courseName: "Distributed Systems",
      creditUnits: 4,
      isChecked: false,
    },
    {
      id: 5,
      courseCode: "CSC 1903",
      courseName: "User Interface Design",
      creditUnits: 3,
      isChecked: false,
    },
    {
      id: 6,
      courseCode: "CSC 4672",
      courseName: "Embedded Systems",
      creditUnits: 4,
      isChecked: false,
    },
  ];

  const [courseUnits, setCourseUnits] =
    useState<CourseUnit[]>(initialCourseUnits);
  const [filterText, setFilterText] = useState("");

  function handleCheckBoxChange(id: number) {
    const updatedList = courseUnits.map((courseUnit) =>
      // listRef.current = listRef.current.map((lecturer) =>
      courseUnit.id === id
        ? { ...courseUnit, isChecked: !courseUnit.isChecked }
        : courseUnit
    );
    setCourseUnits(updatedList);
  }

  // List of selected course units...
  const checkedCourseUnits: CourseUnit[] = courseUnits.filter((courseUnit) =>
    courseUnit.isChecked === true ? courseUnit : ""
  );
  console.log("Checked course units...", checkedCourseUnits);
  return (
    <div className="card p-3 bg-white ml-3 rounded-lg ">
      <p className="text-xl font-semibold">Course units</p>
      <input
        type="text"
        name="courseunitSearch"
        placeholder="Search course unit here.."
        className=" focus:outline-none
          focus:ring-1
          focus:ring-green-700
          py-2
          px-4
          border
          border-gray
          focus:border-teal-500
          w-full
          rounded my-3"
        value={filterText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
      />
      <div>
        {courseUnits
          .filter((courseUnit) => {
            return filterText.toLocaleLowerCase() === ""
              ? courseUnit
              : courseUnit.courseName.toLocaleLowerCase().includes(filterText);
          })
          .map((courseUnit) => (
            <p key={courseUnit.id} className="flex items-center">
              <input
                type="checkbox"
                className="mr-3"
                name="courseunits[]"
                value={courseUnit.id}
                // onChange={(e: ChangeEvent<HTMLInputElement>) => {
                //   console.log(e.target.value);
                //   handleCheckBoxChange(courseUnit.id);
                // }}
                onChange={() => handleCheckBoxChange(courseUnit.id)}
              />
              {courseUnit.courseName}
            </p>
          ))}
      </div>
    </div>
  );
};

export default CourseUnits;
