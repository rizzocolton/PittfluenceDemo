import { Outlet, Link } from "react-router";
import { useState } from "react"

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen">
        {/* Titlebar - outside the sidebar */}
        <nav className="w-full px-4 py-4 flex items-center justify-center p-4 border-b bg-pitt-blue dark:bg-pitt-navy text-pitt-gold dark:text-pitt-bronze">
            <Link to="/" className="text-xl">
                Pittfluence Demo
            </Link>
        </nav>
        {/* Sidebar and content area */}
        <div className="flex flex-1">
            {/* Sidebar */}
            <nav className={`relative flex flex-col border-r transition-all duration-300 bg-pitt-blue dark:bg-pitt-navy text-pitt-gold dark:text-pitt-bronze ${isCollapsed ? 'w-16': 'w-64'}`}>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl p-2" onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? '→' : '←'}
                </button>
                {!isCollapsed && (
                    <div className="p-4 flex flex-col gap-2">
                        <p>
                            Testing 1
                        </p>
                        <p>
                            Testing 2
                        </p>
                    </div>
                )}
            </nav>
            
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    </div>
  );
}
