import "./Login.css"
function Login() {
    return (
        <div>
            <img   src="images/LoginUser.png"/>
            <h1>User Login</h1>
            <form className="Login_form">
                <input minLength={5} type="text" placeholder="Username " maxLength={11} required/>
                <input minLength={10} type="text" placeholder="Password " required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
