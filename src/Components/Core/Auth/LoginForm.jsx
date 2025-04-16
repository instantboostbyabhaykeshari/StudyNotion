import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../../../CSS/Components/Core/Auth/LoginForm.css";
import { useDispatch } from 'react-redux';
import {ACCOUNT_TYPE} from "../../../Utils/constants.js";
import {login} from "../../../Services/Operations/authAPI.js";
import Tab from '../../Common/Tab';

function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
    const [showPassword, setShowPassword] = useState(false);

    const handleOnChange = (event) => {
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    const handleOnSubmit = (event) => {
      event.preventDefault();
      // setFormData({
      //   email: "",
      //   password: ""
      // });
      dispatch(login(formData.email, formData.password, navigate));
    }

    const tabData = [
      {
        id: 1,
        tabName: "Student",
        type: ACCOUNT_TYPE.STUDENT,
      },
      {
        id: 2,
        tabName: "Instructor",
        type: ACCOUNT_TYPE.INSTRUCTOR,
      },
      {
        id: 3,
        tabName: "Admin",
        type: ACCOUNT_TYPE.ADMIN,
      }
    ]


  return (
    <div>
      <Tab tabData={tabData} field={accountType} setField={setAccountType}/>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email"><p className='loginEmailaddress'>Email Address <sup className="aestricColor">*</sup></p>
          <input className='loginEmailInput' required type="email" placeholder='Enter email address' name='email' value={formData.email} onChange={handleOnChange}/>
        </label>
        
        <label htmlFor="password" className='loginPasswordVisiblehandle'><p className='loginPassword'>Password <sup className="aestricColor">*</sup></p>
          <input className='loginPasswordInput' required type={showPassword?"text":"password"} placeholder='Enter Password' name='password' value={formData.password} onChange={handleOnChange}/>
          <span className='logiEyeVisibility' onClick={() => setShowPassword((prev)=>!prev)}>
              {
                  showPassword ? <AiOutlineEyeInvisible fontSize={18} fill="#999DAA"/> : <AiOutlineEye fontSize={18} fill="#999DAA" />
              }
          </span>
          <Link className='loginForgotPassword' to="/forgot-password">
            <p>Forgot Password</p>
          </Link>
        </label>
        
        <button type='submit' className='loginButton'>Sign In</button>
      
      </form>
    </div>
  )
}

export default LoginForm
