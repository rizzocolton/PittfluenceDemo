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
  <div className="">
    <button>
      <Link to="docs"> Go to Docs </Link>
    </button>
  </div>
  );
}
