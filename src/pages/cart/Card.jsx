import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cart-item"; // Corrected the import statement
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
      {PRODUCTS.filter((product) => cartItems[product.id] !== 0).map((product) => (
        <CartItem data={product} key={product.id} />
        ))}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;