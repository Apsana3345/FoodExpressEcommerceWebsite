import Home from "../Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import PlaceOrder from "../pages/PlaceOrder";
import Product from "../pages/Product";
import Verify from "../pages/Verify";

export const RouteConstant = [
 

  {
    id: 1,
    path: "/",

    element: Home,
  },
  {
    id: 2,
    path: "/collection",
    element: Collection,
  },
  {
    id: 3,
    path: "/about",
    element: About,
  },
  {
    id: 4,
    path: "/product/:productId",
    element: Product,
  },
  {
    id: 5,
    path: "/contact",
    element: Contact,
  },
  {
    id: 6,
    path: "/cart",
    element: Cart,
  },
  {
    id: 7,
    path: "/login",
    element: Login,
  },
  {
    id: 8,
    path: "/place-order",
    element: PlaceOrder,
  },
  {
    id: 9,
    path: "/orders",
    element: Orders,
  },
  {
    id: 9,
    path: "/verify",
   element: Verify,
  },
  {
    id: 10,
    path: "/products/:productId", 
    element: Product, 
  }
];
