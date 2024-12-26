import React, { useContext } from "react";
import Button from "../button/button";
import "./cart-dropdown.style.scss";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType="inverted">CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
