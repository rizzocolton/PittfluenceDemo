import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pittfluence Demo" },
    { name: "description", content: "The hypothetical Pittfluence about page" },
  ];
}

export default function About() {
  return <></>;
}
