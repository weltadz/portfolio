import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full h-18 bg-slate-800 flex items-center justify-center text-white font-[roboto] text-xl gap-10   ">
      <Link to="/" className=" hover:text-green-500">
        Home
      </Link>
      <Link to="/About" className=" hover:text-green-500">
        About
      </Link>
      <Link to="/Projects" className=" hover:text-green-500">
        Projects
      </Link>
      <Link to="/Contact" className=" hover:text-green-500">
        Contact
      </Link>
    </nav>
  );
}
