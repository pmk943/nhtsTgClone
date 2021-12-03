import './LoginHeaderElement.css'


type LoginHeaderElementPropType = {
    headername: string
}

function LoginHeaderElement({headername}:LoginHeaderElementPropType) {
    return (
        <div className="LoginHeaderElement__container">
            {headername}
        </div>
        // todo try changing div to span and also add css
    )
}

export default LoginHeaderElement
