import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pittfluence Demo" },
    { name: "description", content: "The hypothetical Pittfluence login page" },
  ];
}

export default function Login() {
  return <></>;
}
