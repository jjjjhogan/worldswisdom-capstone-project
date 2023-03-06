import Wisdom_info from "../components/Wisdom_info";
import React from "react";


export default function Wisdom_container() {

    return (
      <div className="d-flex flex-column inner-height landing">
        
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
          <Wisdom_info/>
          </div>
        </div>
      </div>
    );
  }