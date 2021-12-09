
import './SignIn.css'
function SignIn() {
    return (
        <div className="SignIn__container">
            <img   src="images/LoginUser.png"/>
            <h1>User Login</h1>
            <form className="SignIn_form">
                <input  type="text" placeholder="Username "  required/>
                <input  type="text" placeholder="Password " required/>
                <input type="submit" value="SIGN IN" style={{backgroundColor:"blue", color:"white" }}/>
            </form>
        </div>
    )
}

export default SignIn
