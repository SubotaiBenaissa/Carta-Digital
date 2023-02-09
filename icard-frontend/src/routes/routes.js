import routesAdmin from "./routes-admin";
import routesClient from "./routes-client";
import { Error404 } from "../pages";
import { BasicLayout } from "../layouts";

const routes = [ ...routesClient, ...routesAdmin, {
        path: "*",
        layout: BasicLayout,
        component: Error404
    } 
]

export default routes