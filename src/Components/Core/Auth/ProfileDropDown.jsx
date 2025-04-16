import React from 'react';
import { useSelector } from 'react-redux';
import "../../../CSS/Components/Core/Auth/ProfileDropDown.css";

function ProfileDropDown() {
  const {firstName} = useSelector((state)=>state.profile);
  const {lastName} = useSelector((state)=>state.profile);

  // console.log(firstName);
  // console.log(lastName);
  
  const userImage = `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
  return (
    <div className='profileDropDown'>
      <img className='profileDropDownImage' src={userImage} alt="user-image" />
    </div>
  )
}

export default ProfileDropDown
