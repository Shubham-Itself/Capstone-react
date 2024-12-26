import { useContext } from "react";
import "./checkout-item.style.scss";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="image" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemHandler}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
