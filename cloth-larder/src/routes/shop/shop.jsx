import { Route, Routes } from "react-router";
import CategiesPreview from "../category-preview/categies-preview";
import Category from "../category/category";
import "./shop.style.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategiesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
