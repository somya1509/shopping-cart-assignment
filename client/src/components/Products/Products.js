import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProduct } from "../../redux";
//import Cart from "../Cart/Cart";
import ProductList from "./ProductList";
import SideBar from "../Sidebar/Sidebar";
import "./Products.scss";
import Cart from "../Cart/Cart";

export default function Products() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="products-all">
      <SideBar />
      <ProductList />
      {cart.showCart && <Cart />}
    </div>
  );
}
