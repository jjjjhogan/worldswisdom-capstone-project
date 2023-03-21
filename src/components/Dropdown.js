import React, {useState} from 'react';
import DropdownItem from './DropdownItem';
import achievement from "./dropdown_icons/achievement.svg"
import payment from "./dropdown_icons/payment.svg"
import question_ans from "./dropdown_icons/question_answered.svg"
import question_posted from "./dropdown_icons/question_posted.svg"
import profile from "./dropdown_icons/profile.svg"
import menu from "./dropdown_icons/menu.svg"
import logout from "./dropdown_icons/logout.svg"

export default function Dropdown(props) {
    
    const [open, setOpen] = useState(false);
    const {userData, setUserData} = props;

    const handleLogout = () => {
      setUserData(null);
      sessionStorage.removeItem("userData");

      window.location.reload();
    }

    return (
            <div className='menu-container' >
              <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{userData.firstName}</a>
              </div>
      
              <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                <ul>
                  <DropdownItem img = {profile} text = {"Profile"}/>
                  <DropdownItem img = {question_posted} text = {"Questions Posted"}/>
                  <DropdownItem img = {question_ans} text = {"Questions Answered"}/>
                  <DropdownItem img = {achievement} text = {"Achievement"}/>
                  <DropdownItem img = {payment} text = {"Payment"}/>
                  <div onClick={handleLogout}>
                  <DropdownItem img = {logout} text = {"Logout"} />
                  </div>
                </ul>
              </div>
            </div>
        );
    }

      
