import { AdminLayout } from "../layouts"
import { CategoriesAdmin, HomeAdmin, UserAdmin, ProductAdmin, TablesAdmin } from "../pages"

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
    {
        path: "/admin/categories",
        layout: AdminLayout,
        component: CategoriesAdmin,
        exact: true
    },
    {
        path: "/admin/products",
        layout: AdminLayout,
        component: ProductAdmin,
        exact: true
    },
    {
        path: "/admin/table",
        layout: AdminLayout,
        component: TablesAdmin,
        exact: true
    }
]

export default routesAdmin