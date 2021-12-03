import './LoginHeader.css'
import LoginHeaderElement from './LoginHeaderElement'

function LoginHeader() {
    return (
        <div className="LoginHeader__container">
            <LoginHeaderElement headername="LOGIN" />
            <LoginHeaderElement headername="DASHBOARD" />
            <LoginHeaderElement headername="REPORTS" />
            <LoginHeaderElement headername="GUIDELINES" />
            {/*Todo display login Header element */}
            
        </div>
    )
}

export default LoginHeader
