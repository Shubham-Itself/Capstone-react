import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card";
import "./shop.style.scss";

const Shop = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="products-container">
      {product.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
