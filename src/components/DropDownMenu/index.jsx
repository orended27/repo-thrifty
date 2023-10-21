import {Link} from "react-router-dom";
import './dropDownMenu.css'



const DropDownMenu = ({ handleSelectPage }) => {
    return (
        <div className={'menu'}>
            <table>
                <tbody>
                
                    <tr>
                        <td className='tdLS'>
                            <Link to="/signUp" className="signUpBtn" onClick={handleSelectPage}>Sign up</Link>
                            <img style={{height:"50px"}} className="icon" src="https://thenounproject.com/api/private/icons/736548/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="" />

                        </td>
                    </tr>
                    <tr>
                        <td className='tdLS'>
                            <Link to="/login" className="loginBtn" onClick={handleSelectPage}>Login</Link>
                            <img style={{height:"30px"}} className="icon2" src="https://cdn-icons-png.flaticon.com/128/152/152532.png" alt="" />


                        </td>
                    </tr>
                    <tr>
                        <td className='tdLS'>
                            <Link to="/Card" className="loginBtn" onClick={handleSelectPage}>Cart</Link>
                        </td>
                    </tr>
                    
                    
                    {/* Other menu options */}
                </tbody>
            </table>
        </div>
    );
};

export default DropDownMenu;
