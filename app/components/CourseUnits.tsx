import React from "react";
import InputField from "./InputField";

const CourseUnits = () => {
  const courseUnits = [
    {
      id: 1,
      courseCode: "BSE 2204",
      courseName: "Requirements Engineering",
      creditUnits: 3,
    },
    {
      id: 2,
      courseCode: "BSE 2204",
      courseName: "Numerical Methods",
      creditUnits: 3,
    },
    {
      id: 3,
      courseCode: "BSE 2203",
      courseName: "Object Oriented Programming",
      creditUnits: 3,
    },
    {
      id: 4,
      courseCode: "BSE 2293",
      courseName: "Distributed Systems",
      creditUnits: 4,
    },
    {
      id: 5,
      courseCode: "CSC 1903",
      courseName: "User Interface Design",
      creditUnits: 3,
    },
    {
      id: 6,
      courseCode: "CSC 4672",
      courseName: "Embedded Systems",
      creditUnits: 4,
    },
  ];
  return (
    <div className="card p-3 bg-white ml-3 rounded-lg ">
      <p className="text-xl font-semibold">Course units</p>
      <InputField
        type="search"
        name="courseunitSearch"
        placeholder="Search course unit here.."
        classes="mb-4"
      />
      <div>
        {courseUnits.map((courseunit) => (
          <p key={courseunit.id} className="flex items-center">
            <input
              type="checkbox"
              className="mr-3"
              name="courseunits"
              value={courseunit.courseName}
            />
            {courseunit.courseName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CourseUnits;
