"use client";
import {
  ChangeEvent,
  FormEvent,
  useState,
  useRef,
  useEffect,
  useMemo,
} from "react";
import InputField from "./InputField";

type Lecturer = {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  isChecked: boolean;
};
const Lecturers = () => {
  const initialLecturers: Lecturer[] = [
    {
      id: 1,
      firstName: "Loor",
      lastName: "Jacobson",
      department: "Networks",
      isChecked: false,
    },
    {
      id: 2,
      firstName: "Peter",
      lastName: "Sekitoleko",
      department: "Computer Science",
      isChecked: false,
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Doe",
      department: "Networks",
      isChecked: false,
    },
    {
      id: 4,
      firstName: "Travis",
      lastName: "Hamz",
      department: "Computer Science",
      isChecked: false,
    },
    {
      id: 5,
      firstName: "Jaden",
      lastName: "Sendi",
      department: "Computer Science",
      isChecked: false,
    },
    {
      id: 6,
      firstName: "James",
      lastName: "Doe",
      department: "Information Systems",
      isChecked: false,
    },
    // {
    //   id: 7,
    //   firstName: "Tevares",
    //   lastName: "Nono",
    //   department: "Information Systems",
    //   checked: false,
    // },
  ];
  // const listRef = useRef<Lecturer[]>(initialLecturers);
  const [lecturers, setLecturers] = useState<Lecturer[]>(initialLecturers);
  const [filterText, setFilterText] = useState("");

  function handleCheckBoxChange(id: number) {
    const updatedList = lecturers.map((lecturer) =>
      // listRef.current = listRef.current.map((lecturer) =>
      lecturer.id === id
        ? { ...lecturer, isChecked: !lecturer.isChecked }
        : lecturer
    );
    setLecturers(updatedList);
  }

  // const filteredList = lecturers.filter((lecturer) => {
  //   lecturer.firstName ||
  //     lecturer.lastName
  //       .toLocaleLowerCase()
  //       .includes(filterText.toLocaleLowerCase());
  // });

  // List of selected lecturers...
  const checkedLecturers: Lecturer[] = lecturers.filter((lecturer) =>
    lecturer.isChecked === true ? lecturer : ""
  );
  // console.log("Checked...", checkedLecturers);

  return (
    <div className="card p-3 bg-white ml-3 rounded-lg ">
      <p className="text-xl font-semibold">Lecturers</p>
      <input
        type="text"
        placeholder="Search for lecturer here..."
        className="
          focus:outline-none
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
        {lecturers
          .filter((lecturer) => {
            return filterText.toLocaleLowerCase() === ""
              ? lecturer
              : lecturer.firstName.toLocaleLowerCase().includes(filterText) ||
                  lecturer.lastName.toLocaleLowerCase().includes(filterText);
          })
          .map((lecturer) => (
            <p key={lecturer.id} className="flex items-center">
              <input
                type="checkbox"
                className="mr-3"
                name="lecturers[]"
                checked={lecturer.isChecked}
                value={lecturer.id}
                onChange={() => handleCheckBoxChange(lecturer.id)}
              />
              {lecturer.firstName} {lecturer.lastName}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Lecturers;
