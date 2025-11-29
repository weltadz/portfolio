import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full h-18 bg-slate-900 flex items-center justify-center text-white font-[roboto] text-xl gap-10  fixed top ">
      <Link to="/" className=" hover:text-green-500">
        Home
      </Link>
      <Link to="/about" className=" hover:text-green-500">
        About
      </Link>
      <Link to="/projects" className=" hover:text-green-500">
        Projects
      </Link>
      <Link to="/contact" className=" hover:text-green-500">
        Contact
      </Link>
    </nav>
  );
}
