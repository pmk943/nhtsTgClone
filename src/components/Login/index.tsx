import "./Login.css"
import LoginHeader from "./LoginHeader"
function Login() {
    return (
        <>
        <div className="Login_HeaderContainer">
            <LoginHeader />
        </div>
        <div className="Login__container">
            <img   src="images/LoginUser.png"/>
            <h1>User Login</h1>
            <form className="Login_form">
                <input  type="text" placeholder="Username "  required/>
                <input  type="text" placeholder="Password " required/>
                <input type="submit" value="SIGN IN" style={{backgroundColor:"blue", color:"white" }}/>
            </form>
        </div>
        </>
    )
}

export default Login
