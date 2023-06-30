import Image from "next/image";
import Link from "next/link";
import { BsHouse, BsGear, BsEscape } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="nav flex w-full justify-between items-center px-3 py-3 border-b-3 bg-white text-green-700 text-xl">
      <div className="logo flex items-center flex-row">
        <Link href={"/"}>
          <Image
            src={"/images/muk_logo.png"}
            width={60}
            height={60}
            alt="makerere_logo"
          />
        </Link>
        <Link href="/">
          <p className="sm:none md:block">Makerere University</p>
        </Link>
      </div>

      <div>
        <p className="uppercase text-2xl">Teaching load</p>
      </div>

      <div className="links flex gap-5">
        {/* <div className="flex items-center justify-center flex-col">
          <BsHouse width={30} />
          <Link href={"/"}>Home</Link>
        </div>
        <div className="flex items-center justify-center flex-col">
          <BsGear width={30} />
          <Link href={"/mysettings"}>Settings</Link>
        </div> */}
        {/* <div className="flex items-center justify-center flex-col"> */}
        <div className="border-red-600">
          <Link href={"/logout"} className="">
            <button className="flex items-center justify-center flex-row border-red-400">
              <span>
                <BsEscape className="mr-2" />
              </span>
              <span>Logout</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
