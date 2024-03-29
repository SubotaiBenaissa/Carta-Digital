import { ClientLayout, BasicLayout } from "../layouts"
import { SelectTable } from "../pages"

const routesClient = [
    {
        path: "/",
        layout: BasicLayout,
        component: SelectTable,
        exact: true
    },
]

export default routesClient