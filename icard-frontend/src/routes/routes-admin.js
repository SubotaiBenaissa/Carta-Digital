import { AdminLayout } from "../layouts"
import { CategoriesAdmin, OrdersAdmin, UserAdmin, ProductAdmin, TablesAdmin, TableDetails } from "../pages"

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: OrdersAdmin
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
    },
    {
        path: "/admin/table/:id",
        layout: AdminLayout,
        component: TableDetails,
        exact: true
    }
]

export default routesAdmin