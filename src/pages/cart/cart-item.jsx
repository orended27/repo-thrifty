import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from 'react-router-dom';
import ShoeImg from "../../components/shoeBox";


export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
   const height = '100px';

  return (
    <div className="cartItem">
        <Link style={{ textDecoration: 'none' }} to={`/ShoePage?shoePic=${productImage}&height=${height}&price=${price}&shoeName=${productName}`}>
                  <ShoeImg
                    shoePic={productImage}
                    height="150px"
                  />
                </Link>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p className="textPP"> Price: ${price}</p>
        <div className="countHandler">
          <button className="plusMin" onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="plusMin" onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;