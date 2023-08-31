// import {Link} from "react-router-dom";
import './signUp.css'

const SignUp = () => {

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


    function validatePasswordAuthentification(id, idError) {
        var vp = document.getElementById(id).value;
        if (vp === "") { // Check against an empty string
            document.getElementById(idError).innerHTML = "Password must contain something";
            return false;
        } else if (vp !== document.getElementById("password").value) {
            document.getElementById(idError).innerHTML = "Passwords do not match"; // Updated error message
            return false;
        } else {
            document.getElementById(idError).innerHTML = "";
            return true;
        }
    }

    function validateMail(id, idError){
        var email = document.getElementById(id).value;
    
        var reg = /^(([^<>()[\]//.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email === 0){
            document.getElementById(idError).innerHTML = "mail should contain something";
            return false;
        }else if(!reg.test(email)){
            document.getElementById(idError).innerHTML = "mail is invalid";
            return false;
        }else{
            document.getElementById(idError).innerHTML = "";
            return true;
        }
    }

    

    function validateForm2(event) {
    event.preventDefault();
    var trueValidation = true;

    var password = validatePassword("password", "errorPassword");
    var username = validateUserName("username", "errorUserName");
    var passwordauthentification = validatePasswordAuthentification("passwordauthentification", "errorPasswordAuthentification");
    var mail = validateMail("mail","errorMail");

    trueValidation = trueValidation && username && password && passwordauthentification && mail; // Assign trueValidation the combined result

    return trueValidation; // Return the combined result
}

    return (
        <>
            <h1 className='signUpL'>Sign Up</h1>
            <form onSubmit={validateForm2}>
                
                <input type="text" className="login__input" id="username" placeholder="Username" />
                <div className="error" id="errorUserName"></div>
                <br />
                <input type="password" className="login__input" id="password" placeholder="Password" />
                <div className="error" id="errorPassword"></div>
                <br />
                <input type="password" className="login__input" id="passwordauthentification" placeholder="password Authentification" />
                <div className="error" id="errorPasswordAuthentification"></div>
                <br />
                <input type="text" className="login__input" id="mail" placeholder="Mail" />
                <div className="error" id="errorMail"></div>
                <br />

                
                
                
                <button className="registerButton" type="submit" value="send">
                    <h1 className="registerW" style={{ color: 'white' }}>Register</h1>
                </button>
            </form>
        </>
    );
}



export default SignUp;
