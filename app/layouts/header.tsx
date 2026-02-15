import { Outlet, Link } from "react-router";

export default function Header() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b bg-pitt-blue dark:bg-pitt-navy text-pitt-gold dark:text-pitt-bronze">
        <div className="w-full px-100 py-4 flex justify-between">
          <Link to="/" className="hover:font-bold text-xl">
            Pittfluence Demo
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:font-bold">Home</Link>
            <Link to="about" className="hover:font-bold">About</Link>
            <Link to="login" className="hover:font-bold">Login</Link>
          </div>
        </div>
      </nav>
      
      <div className="flex-1 flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}