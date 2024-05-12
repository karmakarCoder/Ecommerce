import React from "react";
// ======== All Pages ===========
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Products from "./Pages/Products/Products";

// ==============================
import RootLayout from "./Common/RootLayout/RootLayout";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/product-details/:product" element={<Products />}></Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
