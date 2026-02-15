import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pittfluence Demo" },
    { name: "description", content: "The hypothetical Pittfluence home page" },
  ];
}

export default function Home() {
  return(
  <div>
    <button className="text-5xl px-4 py-2 cursor-pointer bg-pitt-blue dark:bg-pitt-navy text-pitt-gold dark:text-pitt-bronze font-medium hover:border-2">
      <Link to="docs"> Go to Docs </Link>
    </button>
  </div>
  );
}
