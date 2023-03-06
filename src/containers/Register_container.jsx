import Register_info from "../components/Register_info";
import React from "react";


export default function Register_container() {

    return (
      <div className="d-flex flex-column inner-height landing">
        
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
          <Register_info />
          </div>
        </div>
      </div>
    );
  }