import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../Services/Operations/authAPI';
import "../CSS/Pages-CSS/VerifyEmail.css";

function VerifyEmail() {
    const {signUpData} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [otp, setOtp] = useState("");

    otp = Number(otp);
    // console.log(signUpData);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const {accountType, firstName, lastName, email, password, confirmPassword} = signUpData;
        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate));
    }


  return (
    <div className='emailVerificationPage'>
        <div className='emailVerificationDiv'>
            <div>
                <p className='verifyEmail'>Verify email</p>
                <p className='verifyEmailDescription'>A verification code has been sent to you. Enter the code below</p>
            </div>

            {/* OTP code input */}

            <form onSubmit={handleOnSubmit}>
                <OtpInput
                    containerStyle={{justifyContent: "space-around"}}
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>&nbsp;</span>}
                    renderInput={(props) => 
                    
                    <input {...props} placeholder='-' className='verifyOtpInput'/>}
                />
                <button className='verifyemailbutton' type='submit'>Verify and Register</button>
            </form>

            <div className='backtoLoginResentOTP'>
                <div>
                    <Link to={"/signup"} style={{textDecoration: "none", color: '#ffffff', display: "flex", alignItems: "center"}}><IoIosArrowRoundBack size={24}/> Back to login</Link>
                </div>
                <div>
                    <Link style={{textDecoration: "none", color: '#47A5C5', display: "flex", alignItems: "center"}}>
                        <RxCounterClockwiseClock /> Resend OTP
                    </Link>
                </div>
            </div>
            </div>
    </div>
  )
}

export default VerifyEmail;
