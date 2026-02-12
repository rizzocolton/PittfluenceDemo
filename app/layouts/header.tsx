import { Outlet, Link } from "react-router";

export default function Header() {
  return (
    /*container is always at least screen height and its flexbox is organized column wise*/
    <div className="min-h-screen flex flex-col">
      {/*makes the nav container have a blue/dark blue background and gold/broze text*/}
      <nav className="bg-pitt-blue dark:bg-pitt-navy text-pitt-gold dark:text-pitt-bronze">
        {/* sets max size of this container to 1280px, centers container with 16 px padding in each axis
        and makes its flex items have even space between them  */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <Link to="/" className="text-xl">
            Pittfluence Demo
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="about" className="hover:text-blue-400">About</Link>
            <Link to="login" className="hover:text-blue-400">Login</Link>
          </div>
        </div>
      </nav>
      
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}