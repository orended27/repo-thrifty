import React, {useContext} from 'react';
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';
import ShoeImg from '../components/shoeBox'
import "./product.css";
import "./HomeCss.css"

const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);


    const cartItemCount = cartItems[id];

    const height = '200px';
  
    // Truncate the productName if it's longer than 13 characters
    const truncatedProductName = productName.length > 13
      ? productName.substring(0, 18) + '...'
      : productName;
  
    return (
      <div>
        <table className='table'>
          <tbody>
            <tr className='tr'>
              <td className='tdM'>
                <Link style={{ textDecoration: 'none' }} to={`/ShoePage?shoePic=${productImage}&height=${height}&price=${price}&shoeName=${productName}`}>
                  <ShoeImg
                    shoePic={productImage}
                    height="100px"
                  />
                  <p className='productNameText'>{truncatedProductName}</p>
                </Link>
                <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

export default Product;