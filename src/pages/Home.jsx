import './HomeCss.css';
import ShoeImg from '../components/shoeBox';
import { Link } from 'react-router-dom';
// import { Link } from "react-router-dom";


const Home = () => {
    const height = '200px';

    //shoe 1 jordan 4 Millitary black
        const url1 = "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=16527112575"
        const shoeName1 = "Jordan 4 military black";
        const price1 = '700NIS';
    //shoe 2 dunk purple lobster
        const url2 ='https://images.stockx.com/images/Nike-SB-Dunk-Low-Concepts-Purple-Lobster-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606322845';
        const shoeName2 = 'dunk purple lobster';
        const price2 = '700NIS'
    //shoe 3 Air force 1 Drake
    const url3 ='https://images.stockx.com/images/Nike-Air-Force-1-Low-Drake-Certified-Lover-Boy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1667486313';
    const shoeName3 = 'Air force 1 Drake';
    const price3 = '700NIS'
    //shoe 4
    const url4 = 'https://images.stockx.com/images/adidas-Yeezy-700-V3-Kyanite-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1617895639';
    const shoeName4 = 'addias yeezy 700';
    const price4 = '700NIS';

    return (
        <>
            <h1>Don’t wear it? Sell it!</h1>
            <p className='text'>
                We want to show you just how great second-hand can be. Sell the clothes that have more to give. Shop for items you won’t find in stores. Vinted is open to everyone who believes that good clothes should live long.
            </p>
            <table className='table'>
                <tbody>
                    <tr className='tr'>
                        <td className='tdM'>

                        <Link to={`/ShoePage?shoePic=${url1}&height=${height}&price=${price1}&shoeName=${shoeName1}`}>
                            <ShoeImg
                                shoePic={url1}
                                height="100px"
                            />
                        </Link>

                        </td>
                        <td className='tdM'>

                        <Link to={`/ShoePage?shoePic=${url2}&height=${height}&price=${price2}&shoeName=${shoeName2}`}>
                            <ShoeImg
                                shoePic={url2}
                                height="100px"
                            />
                        </Link>         

                        </td>
                    </tr>
                    <tr className='tr'>
                        <td className='tdM'>
                        <Link to={`/ShoePage?shoePic=${url3}&height=${height}&price=${price3}&shoeName=${shoeName3}`}>
                            <ShoeImg
                                shoePic={url3}
                                height="100px"
                            />
                        </Link>                        </td>
                        <td className='tdM'>
                        <Link to={`/ShoePage?shoePic=${url4}&height=${height}&price=${price4}&shoeName=${shoeName4}`}>
                            <ShoeImg
                                shoePic={url4}
                                height="100px"
                            />
                        </Link>                        
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    );
};

export default Home;