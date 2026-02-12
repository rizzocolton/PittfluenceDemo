import { Outlet, Link } from "react-router";

export default function Header() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-pitt-blue dark:bg-pitt-navy text-pitt-gold dark:text-pitt-bronze">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <Link to="/" className="text-xl font-bold">
            Pittfluence Demo
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/about" className="hover:text-blue-400">About</Link>
          </div>
        </div>
      </nav>
      
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}