import React from "react";
// import Register_categories from '../components/Register_categories';
import RegisterInfo from "../components/RegisterInfo";
// import Wisdom_info from "../components/WisdomInfo";

export default function RegisterForm1() {

    return (
      <div className="d-flex flex-column inner-height landing">
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
            <h1>Welcome to WorldsWisdom</h1>
            <br />
            <br />
            <div>
                <RegisterInfo/>
            </div>
        </div>
      </div>
    );
  }
  