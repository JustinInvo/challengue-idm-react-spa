import { Home } from "../pages/Home"
import { Contact } from "../pages/Contact"
import { ProductDetail } from "../pages/ProductDetail"

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/product/:id',
    component: ProductDetail
  },
]

export default routes