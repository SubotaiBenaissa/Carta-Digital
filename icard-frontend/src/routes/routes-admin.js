import { AdminLayout } from "../layouts"
import { HomeAdmin, UserAdmin } from "../pages"

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin
    },
    {
        path: "/admin/user",
        layout: AdminLayout,
        component: UserAdmin
    },

]

export default routesAdmin