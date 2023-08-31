// import { Link } from "react-router-dom";
import React from "react"; // Make sure to import React

import './signUp.css'

const Login = () => {

    function validateUserName(id, idError) {
        var vu = document.getElementById(id).value;
        var reg = /^[A-Za-z1-9()]+$/;
        if (vu === "") {
            document.getElementById(idError).innerHTML = "Username must contain something";
            return false;
        } else if (!reg.test(vu)) {
            document.getElementById(idError).innerHTML = "Only English letters and no spaces allowed";
            return false;
        } else {
            document.getElementById(idError).innerHTML = "";
            return true;
        }
    }

    function validatePassword(id, idError) {
        // 1. length >= 6 2. all character are letters
        var pw = document.getElementById(id).value;
        var specialChar =/[@!#$%^&*-+]/;
        var num =/[1-9]/;
        if(pw === 0){
            document.getElementById(idError).innerHTML = "Password must contain something";
            return false;
        }else if(pw.length < 6){
            document.getElementById(idError).innerHTML = "Password must be minimume 6 letter";
            return false;
        }else if(pw.length > 12){
            document.getElementById(idError).innerHTML = "Password must be maximum 12 letter";
            return false;
        }else if(!specialChar.test(pw)){
            document.getElementById(idError).innerHTML = "pasword must contain 1 special character";
            return false;
        }else if(!num.test(pw)){
                document.getElementById(idError).innerHTML = "pasword must contain 1 number";
                return false;
        }else{
            document.getElementById(idError).innerHTML = "";
            return true;
        }
    }

    function validateForm2(event) {
        event.preventDefault(); // Prevent the default form submission
        var trueValidation = true;

        var password = validatePassword("password", "errorPassword");
        var username = validateUserName("username", "errorUserName");

        var fin = trueValidation && username && password;
        return fin;

        
    }

    return (
        <>
            <h1 className='signUpL'>Login</h1>
            <form action="" onSubmit={validateForm2}>
                <input type="text" className="login__input" id="username" placeholder="Username" />
                <div className="error" id="errorUserName"></div>
                <br />
                <input type="password" className="login__input" id="password" placeholder="Password" />
                <div className="error" id="errorPassword"></div>

                <button className="registerButton" type="submit" value="send">
                    <h1 className="registerW" style={{ color: 'white' }}>Login</h1>
                </button>
            </form>
        </>
    );
}

export default Login;