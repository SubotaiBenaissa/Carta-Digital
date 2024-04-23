import { BasicLayout, ClientLayout } from "../layouts"
import { SelectTable } from "../pages"
import { Categories } from "../pages"
import { Products } from "../pages"

const routesClient = [
    {
        path: "/",
        layout: BasicLayout,
        component: SelectTable,
        exact: true
    },
    {
        path: "/client/:tableNumber",
        layout: ClientLayout,
        component: Categories,
        exact: true
    },
    {
        path: "/client/:tableNumber/:idCategory",
        layout: ClientLayout,
        component: Products,
        exact: true
    }
]

export default routesClient