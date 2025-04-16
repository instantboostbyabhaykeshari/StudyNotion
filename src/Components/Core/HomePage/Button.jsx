import React from 'react'
import { Link } from 'react-router-dom'
import "../../../CSS/Components/Core/HomePage/Button.css";

function Button({children, active, linkTo, textColor, boxShadow}) {
  return (
    <Link to={linkTo}
    style={
      {
        textDecoration: "none", 
        color: `${textColor? "#000814" : "#F1F2FF"}`
      }
    }>
        <div className='button' 
        style={
          {
            backgroundColor: `${active? "#FFD60A" : "#161D29"}`, 
            boxShadow: `${boxShadow? "-2px -2px rgb(250, 214, 33) inset" : "-2px -2px rgb(30, 38, 52) inset"}`
          }
        }>
            {children}
        </div>
    </Link>
   
  )
}

export default Button
