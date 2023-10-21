// import { Link } from "react-router-dom";

const ShoeImg = ({ shoePic, height }) => {
    return (
        <>
                <td className='tdM' style={{ border: 'solid 1px white' }}>
                    <img
                        style={{ height: height }} 
                        src={shoePic}
                        alt=""
                    />
                </td>
        </>
    );
};


export default ShoeImg;

