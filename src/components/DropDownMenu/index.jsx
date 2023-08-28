import {Link} from "react-router-dom";
import './dropDownMenu.css'



const DropDownMenu = ({ handleSelectPage }) => {
    return (
        <div className={'menu'}>
            <table>
                <tbody>
                <tr>
                        <td className='td'>      
                            <input className="SearchBar" type="text"  placeholder="          Search..." /> 
                        </td>
                    </tr>
                    <tr>
                        <td className='td'>
                            <Link to="/signUp" style={{ color: 'black' }} onClick={handleSelectPage}>Sign up</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='td'>
                            <Link to="/login" style={{ color: 'black' }} onClick={handleSelectPage}>Login</Link>
                        </td>
                    </tr>
                    
                    {/* Other menu options */}
                </tbody>
            </table>
        </div>
    );
};

export default DropDownMenu;
