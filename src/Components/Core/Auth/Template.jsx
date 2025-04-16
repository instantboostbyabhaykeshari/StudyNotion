import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from "../../Common/Spinner.jsx";
import frameImg from "../../../assets/Images/frame.png"
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import "../../../CSS/Components/Core/Auth/Template.css";

function Template({title, description1, description2, image, formType}) {
    let {loading} = useSelector((state)=>state.auth);

  return (
    <div>
      {
        loading ? (<div><Spinner/></div>) : 
        (
            <div className='template'>
                <div className='leftPart'>
                    <div className="authHeading">
                        <p className="heading">{title}</p>
                        <div className='descriptions'>
                            <span className="description1">{description1}</span> &nbsp;
                            <span className="description2">{description2}</span>
                        </div>
                    </div>
                    <div className='authform'>
                    {
                      formType === "signup" ? (<SignupForm/>) : (<LoginForm/>)
                    }
                    </div>
                </div>

                {/* image */}
                <div className='signupLoginImage'>
                    <img className='frameimage' src={frameImg} alt="Pattern" loading='lazy'/>
                    <img className='authimage' src={image} alt={image} loading='lazy'/>
                </div>
            </div>
         )
      } 
    </div>
  )
}

export default Template;
