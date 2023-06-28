import Image from "next/image";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Link from "next/link";
import CourseUnits from "./components/CourseUnits";
import Lecturers from "./components/Lecturers";
import TeachingLoadSummary from "./components/TeachingLoadSummary";

export default function Home() {
  return (
    <>
      <div className="buttons border-b-2 border-b-green-700 pt-4">
        <div className="flex gap-4">
          <Link href={"/teachingload/new"} className="ml-5 mb-3">
            <button className="btn hover:bg-green-700 outline-none hover:text-white px-5 py-2 border-2 border-green-400 rounded">
              New
            </button>
          </Link>
          {/* <button className="btn hover:bg-green-700 outline-none hover:text-white px-5 py-2 border-2 border-green-400 rounded">
            Cancel
          </button> */}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        <CourseUnits />
        <Lecturers />
        <TeachingLoadSummary />
      </div>
    </>
  );
}
