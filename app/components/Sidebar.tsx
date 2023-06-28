import Image from "next/image";
import Link from "next/link";

import { BsBook } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="bg-white h-screen rounded-sm pt-5 mb-2">
      <div className="profile flex flex-col items-center justify-center border-b-2 border-b-green-700">
        <Image
          src={"/images/person_holder.png"}
          width={100}
          height={100}
          alt="person_image"
        />
        <div className="pt-2">
          <h4>Dr. Loor Jacobson</h4>
          <p className="text-center">Networks dept</p>
        </div>
      </div>

      <div className="sidebar_links pl-5">
        <p className="flex items-center mt-3">
          <BsBook className="mr-2" />
          <Link href={"/teachingload"}>Teaching Load</Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
