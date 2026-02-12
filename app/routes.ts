import { type RouteConfig, index, layout, route } from "@react-router/dev/routes"; //added layout import
//Did some minimal routing setup to demonstrate functionality
export default [
    layout("layouts/header.tsx",[
        index("routes/home.tsx"),
        route("about","routes/about.tsx")
    ]),
    route("login", "routes/login.tsx")
] satisfies RouteConfig;