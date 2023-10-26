import './HomeCss.css';
// import ShoeImg from '../components/shoeBox';
// import { Link } from 'react-router-dom';
import { PRODUCTS } from '../products';
import Product from './product'; 
// import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <h1>Don’t wear it? Sell it!</h1>
            <p className='text'>
                We want to show you just how great second-hand can be. Sell the clothes that have more to give. Shop for items you won’t find in stores. Vinted is open to everyone who believes that good clothes should live long.
            </p>
            

            <div className='products'>
            {PRODUCTS.map((product) => (
                <Product data={product} key={product.id} />
            ))}
            </div>



        </>
    );
};

export default Home;