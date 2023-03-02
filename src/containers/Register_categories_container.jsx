import React from "react";
import Register_categories from "../components/Register_categories";


export default function Register_categories_container() {

    return (
      <div className="d-flex flex-column inner-height landing">
        
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
          <Register_categories />
          </div>
        </div>
      </div>
    );
  }