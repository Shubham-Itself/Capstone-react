import React, { useContext } from "react";
import shoppingBag from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const handleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={handleCartDropdown}>
      <img src={shoppingBag} alt="shoppingbag" className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
