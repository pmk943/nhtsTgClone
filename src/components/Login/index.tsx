import "./Login.css"
import LoginHeader from "./LoginHeader"
import {
    Routes,
    Route
  } from "react-router-dom";
import SignIn from "./SignIn";
function Login() {
    return (
        <>
        <div className="Login_HeaderContainer">
            <LoginHeader />
        </div>
        <Routes>
            <Route path="/login" element={<SignIn />} />
        </Routes>
        
        
        </>
    )
}

export default Login
