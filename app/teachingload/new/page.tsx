import Image from "next/image";

import Link from "next/link";
import CourseUnits from "@/app/components/CourseUnits";
import Lecturers from "@/app/components/Lecturers";
import TeachingLoadSummary from "@/app/components/TeachingLoadSummary";

const NewTeachingLoad = () => {
  return (
    <>
      <div className="buttons border-b-2 border-b-green-700 pt-4">
        <div className="flex gap-4">
          <Link href={"/teachingload/new"} className="ml-5 mb-3">
            <button className="btn hover:bg-green-700 outline-none hover:text-white px-5 py-2 border-2 border-green-400 rounded">
              New
            </button>
          </Link>
          <Link href={"/teachingload/edit/2"} className="ml-5 mb-3">
            <button className="btn hover:bg-green-700 outline-none hover:text-white px-5 py-2 border-2 border-green-400 rounded">
              Edit
            </button>
          </Link>
          <Link href={"/"} className="ml-5 mb-3">
            <button className="btn hover:bg-green-700 outline-none hover:text-white px-5 py-2 border-2 border-green-400 rounded">
              Cancel
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        <CourseUnits />
        <Lecturers />
        <TeachingLoadSummary />
      </div>

      <div className="flex gap-4 justify-center items-center control_buttons ml-4 mt-3">
        <button
          className="text-green-700 px-4 rounded py-2 border-2 border-green-700 hover:bg-green-700 hover:text-white mt-2 hover:scale-95"
          type="button"
        >
          New Subgroup
        </button>
        <button
          className="text-white px-4 rounded py-2 bg-green-700 mt-2 hover:scale-95"
          type="button"
          disabled
        >
          Assign
        </button>
        <button
          className="text-white px-4 rounded py-2 bg-green-700 mt-2 hover:scale-95"
          type="button"
        >
          Broadcast
        </button>
      </div>
    </>
  );
};

export default NewTeachingLoad;
