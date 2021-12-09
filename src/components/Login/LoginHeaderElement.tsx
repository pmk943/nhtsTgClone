import { Link, NavLink } from "react-router-dom";
import "./LoginHeaderElement.css";
import { useState } from 'react'

type LoginHeaderElementPropType = {
  headername: string;
};

function LoginHeaderElement({ headername }: LoginHeaderElementPropType) {
   
  return (
    <div className="LoginHeaderElement__container">
      <NavLink
        className={(props) => {
          return props.isActive ? "isActive " : "";
        }}
        to={`/${headername}`}
      >
        {headername}
      </NavLink>
    </div>
    // todo try changing div to span and also add css
  );
}

export default LoginHeaderElement;
