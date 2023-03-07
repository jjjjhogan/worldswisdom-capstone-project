import React, {useState} from 'react';
import DropdownItem from './DropdownItem';
import achievement from "./dropdown_icons/achievement.svg"
import payment from "./dropdown_icons/payment.svg"
import question_ans from "./dropdown_icons/question_answered.svg"
import question_posted from "./dropdown_icons/question_posted.svg"
import profile from "./dropdown_icons/profile.svg"
import menu from "./dropdown_icons/menu.svg"
import logout from "./dropdown_icons/logout.svg"

export default function Dropdown() {
    
    const [open, setOpen] = useState(false);


  
    return (
            <div className='menu-container' >
              <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                <img src={menu}></img>
              </div>
      
              <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                <ul>
                  <DropdownItem img = {profile} text = {"Profile"}/>
                  <DropdownItem img = {question_posted} text = {"Questions Posted"}/>
                  <DropdownItem img = {question_ans} text = {"Questions Answered"}/>
                  <DropdownItem img = {achievement} text = {"Achievement"}/>
                  <DropdownItem img = {payment} text = {"Payment"}/>
                  <DropdownItem img = {logout} text = {"Logout"}/>
                </ul>
              </div>
            </div>
        );
    }

      
