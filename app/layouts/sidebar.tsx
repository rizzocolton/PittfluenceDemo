import { Outlet, Link } from "react-router";
import { useState } from "react"
import { getDocuments } from "../data"

import type {Route} from "../../.react-router/types/app/layouts/+types/sidebar"

export async function loader(){
    const documents=await getDocuments();
    return { documents };
}

export default function Sidebar({
    loaderData
}: Route.ComponentProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const {documents}=loaderData;

  return (
    <div className="flex flex-col h-screen">
        {/* Titlebar - outside the sidebar */}
        <nav className="w-full px-4 py-4 flex items-center justify-center p-4 border-b bg-pitt-blue dark:bg-pitt-navy text-pitt-gold dark:text-pitt-bronze">
            <Link to="/" className="hover:font-bold text-xl">
                Pittfluence Demo
            </Link>
        </nav>
        {/* Sidebar and content area */}
        <div className="flex flex-1">
            {/* Sidebar */}
            <nav className={`relative flex flex-col border-r transition-all duration-300 bg-pitt-blue dark:bg-pitt-navy text-pitt-gold dark:text-pitt-bronze ${isCollapsed ? 'w-16': 'w-64'}`}>
                <button
                     className="bg-pitt-blue dark:bg-pitt-navy border-2 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-3xl
                                 px-1 py-8 cursor-pointer" 
                     onClick={()=>setIsCollapsed(!isCollapsed)}
                     >
                    {isCollapsed ? '→' : '←'}
                </button>
                {!isCollapsed && (
                    <div className="p-4 flex flex-col gap-10">
                        <div>
                            <input 
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 border-2" 
                            />
                        </div>
                        <nav className="flex flex-col gap-2">
                            {documents.map((document)=>(
                                <Link to={`/docs/${document.id}`}>
                                <button className="text-left w-full px-4 py-2 border-2 cursor-pointer hover:font-bold">
                                    {document.id}
                                </button>
                                </Link>
                            ))}
                        </nav>
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
