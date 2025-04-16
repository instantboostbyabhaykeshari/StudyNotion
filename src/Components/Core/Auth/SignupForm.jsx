import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import toast from 'react-hot-toast';
import Tab from '../../Common/Tab';
import {ACCOUNT_TYPE} from "../../../Utils/constants.js";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {sendOtp} from "../../../Services/Operations/authAPI.js";
import {setSignUpData} from "../../../Slices/authSlice.js";
import "../../../CSS/Components/Core/Auth/SignupForm.css";

function SignupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (event) => {
    setFormData((prevData)=>({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("Passwords Do Not Match.");
      return;
    }

    const signUpData = {
      ...formData,
      accountType,
    }

    dispatch(setSignUpData(signUpData));

    dispatch(sendOtp(formData.email, navigate));

    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // });

    console.log(accountType);
    setAccountType(ACCOUNT_TYPE.STUDENT);
    
    console.log(signUpData);
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
      tabName: "Admin"
    }
  ]
  
  return (
    <div>
      <Tab tabData={tabData} field={accountType} setField={setAccountType}/>
      <form onSubmit={handleOnSubmit}>
        <div className='firstLastName'>
          <label htmlFor=""><p className='signupLevel'>First Name<sup className="aestricColor">*</sup></p>
            <input className='signupFirstLastNameInput signupInput' type="text" required placeholder="Enter first name" value={formData.firstName} name='firstName' onChange={handleOnChange}/>
          </label>
          <label htmlFor=""><p className='signupLevel'>Last Name<sup className="aestricColor">*</sup></p>
            <input className='signupFirstLastNameInput signupInput' type="text" required placeholder="Enter last name" value={formData.lastName} name='lastName' onChange={handleOnChange}/>
          </label>
        </div>

        <label htmlFor=""><p className='signupLevel'>Email Address<sup className="aestricColor">*</sup></p>
          <input className='signupemailAddressInput signupInput' type="text" required placeholder="Enter email address" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" value={formData.email} name='email' onChange={handleOnChange}/>
        </label>
        
        <div className="signupPasswoed">
          <label htmlFor="" className='signupPasswordVisiblehandle'><p className='signupLevel'>Create Password<sup className="aestricColor">*</sup></p>
            <input className='passwordinput signupInput' type={showPassword ? "text" : "password"} required placeholder="Enter Password" value={formData.password} name='password' onChange={handleOnChange}/>
            <span className='signupEyeVisibility' onClick={()=>setShowPassword((prev)=>!prev)}>
              {
                showPassword ? <AiOutlineEyeInvisible fontSize={18} fill="#999DAA"/> : <AiOutlineEye fontSizfill="#999DAA" />
              }
            </span>
          </label>
          <label htmlFor="" className='signupPasswordVisiblehandle'><p className='signupLevel'>Confirm Password<sup className="aestricColor">*</sup></p>
            <input className='passwordinput signupInput' type={showConfirmPassword ? "text" : "password"} required placeholder="Confirm Password" value={formData.confirmPassword} name='confirmPassword' onChange={handleOnChange}/>
            <span className='signupEyeVisibility' onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
              {
                showConfirmPassword ? <AiOutlineEyeInvisible fontSize={18} fill="#999DAA"/> : <AiOutlineEye fontSizfill="#999DAA" />
              }
            </span>
          </label>
        </div>

        <button type='submit' className='signButton'>Create Account</button>
    </form>
    </div>
  )
}

export default SignupForm
