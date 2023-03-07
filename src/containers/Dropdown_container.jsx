import Dropdown from "../components/Dropdown";
import React from "react";


export default function Dropdown_container() {

    return (
      <div className="d-flex flex-column inner-height landing">
        
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
          <Dropdown />
          </div>
        </div>
      </div>
    );
  }