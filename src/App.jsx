// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ======== All Pages ===========
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Registration from "./Pages/Registration/Registration";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
// ==============================
import RootLayout from "./Common/RootLayout/RootLayout";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Wishlist from "./Pages/Wishlist/Wishlist";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route
        path="/product-details/:productID"
        element={<ProductDetails />}
      ></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/wishlist" element={<Wishlist />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  );
}

export default App;
