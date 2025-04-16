import {toast} from "react-hot-toast";
import {apiConnector} from "../apiConnector.js";
import { endPoints } from "../apis";
import {setLoading, setToken} from "../../Slices/authSlice.js";
import { setFirstName, setLastName, setAccountType } from "../../Slices/profileSlice.js";


export const sendOtp = (email, Navigate) => {
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST", endPoints.SEND_OTP_API, {email});
            console.log("Send Otp: ", response);

            toast.success("OTP send successfully.");
            Navigate("/verify-email");
        }catch(err){
            console.log(err);
            console.log("Error in connecting sendOTP API.");
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}

export function signUp (
              accountType,
              firstName,
              lastName,
              email,
              password,
              confirmPassword,
              otp,
              navigate
)  {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST", endPoints.SIGN_UP_API, {accountType, firstName, lastName, email, password, confirmPassword, otp});
            console.log(response);

            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("SignUp Successfully.");
            navigate("/login");
        }catch(err){
            console.log(err);
            console.log("Something error in signUp API fetching.");
            toast.error(err.message);
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}

//Login API

export const login = (email, password, navigate) => {
    return async(dispatch) => {
        const toastId = toast.success("Loading...");
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST", endPoints.LOGIN_API, {email, password});
            console.log(response);
            if(!response?.data?.success){
                throw new Error(response?.data?.message);
            }
            toast.success("Login successfully.");
            if(response?.data?.token === null){
                throw new Error("Token is null.");
            }

            dispatch(setToken(response?.data?.token));
            localStorage.setItem("token", JSON.stringify(response?.data?.token));

            const firstName = response?.data?.existingUser?.firstName;
            const lastName = response?.data?.existingUser?.lastName;
            const accountType = response?.data?.existingUser?.lastName;

            dispatch(setFirstName(firstName));
            dispatch(setLastName(lastName));
            dispatch(setAccountType(accountType));
            
            localStorage.setItem("firstName", JSON.stringify(firstName));
            localStorage.setItem("lastName", JSON.stringify(lastName));
            localStorage.setItem("accountType", JSON.stringify(accountType));

            navigate("/dashboard");
        }catch(err){
            console.log(err);
            console.log("Error in fetching login API.");
            toast.error(err.message);
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}