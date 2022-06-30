import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { addItemToCart, decreaseCheckoutItem, removeCheckoutItem } =
    useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(cartItem);
  const decreaseCheckoutItemHandler = () => decreaseCheckoutItem(cartItem);
  const removeCheckoutItemHandler = () => removeCheckoutItem(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={decreaseCheckoutItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={removeCheckoutItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
