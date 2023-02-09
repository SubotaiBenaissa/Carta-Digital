import routesAdmin from "./routes-admin";
import routesClient from "./routes-client";
import { Error404 } from "../pages";

const routes = [ ...routesClient, ...routesAdmin, {
        path: "*",
        layout: "",
        component: Error404
    } 
]

export default routes