import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full h-18 bg-slate-800 flex items-center justify-center text-white font-[roboto] text-xl gap-10   ">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}
