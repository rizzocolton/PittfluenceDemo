import { type RouteConfig, index, layout } from "@react-router/dev/routes"; //added layout import
//Did some minimal routing setup to demonstrate functionality
export default [
    layout("layouts/header.tsx",[
        index("routes/home.tsx")
    ])
] satisfies RouteConfig;