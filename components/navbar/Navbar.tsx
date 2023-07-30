import Link from "next/link";
import Image from "next/image";
import AboriginalFlag from "../../assets/Australian_Aboriginal_Flag_Pantone.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Image
            src={AboriginalFlag}
            width={50}
            alt="Aboriginal Flag"
            className="rounded"
          />
          <ul className="flex space-x-4">
            <li className="transition rounded p-3 hover:bg-white">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="transition rounded p-3 hover:bg-white">
              <Link href="/about">
                About
              </Link>
            </li>
            <li className="transition rounded p-3 hover:bg-white">
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
