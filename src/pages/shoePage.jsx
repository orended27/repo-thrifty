import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import { useLocation } from 'react-router-dom';
import ShoeImg from '../components/shoeBox';
import './shoePage.css';

function ShoePage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const shoePic = searchParams.get('shoePic');
  const height = searchParams.get('height');
  const price = searchParams.get('price');
  const shoeName = searchParams.get('shoeName');
  const id = searchParams.get('id');

  const { updateCartItem } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    updateCartItem(id, quantity);
    document.getElementById('addedToCard').innerHTML = "Added to card";
  };

  return (
    <div>
      <p className='pageOrder'>Home/{shoeName}</p>
      <div style={{ marginLeft: '10%' }}>
        <ShoeImg shoePic={shoePic} height={height} />
        <p className='shoeName'>{shoeName}</p>
        <p className="price">price:{price}$</p>
        <p className='pageOrder'>Size:</p>
        <select className='selectSize'>
          <option value="0">Select size:</option>
          <option value="1">45</option>
          <option value="2">46</option>
          <option value="3">47</option>
        </select>
        <p className='pageOrder'>Quantity:</p>
        
        <div>
          <button className='decreaseIncreaseQuantity' onClick={decreaseQuantity}>-</button>
          <input type="text" className='quantityButton' value={quantity} />
          <button className='decreaseIncreaseQuantity' onClick={increaseQuantity}>+</button>

          
        </div>

        <p className='pageOrder'>Card:</p>

        <button className='addToCardBttn' onClick={addToCart}>Add to cart</button>
        <br />
        <div className='pageOrder' id='addedToCard' />
        <button className='buyNow'>Buy now</button>
        <div id='addedToCard' />
      </div>
    </div>
  );
}

export default ShoePage;