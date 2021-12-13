import "./Login.css"
import LoginHeader from "./LoginHeader"
import {
    Routes,
    Route,
    Outlet
  } from "react-router-dom";
import SignIn from "./SignIn";
function Login() {
    return (
        <>
        <div className="Login_HeaderContainer">
            <LoginHeader />
        </div>
        <div>
            <Outlet />
        </div>
        
        
        </>
    )
}

export default Login
