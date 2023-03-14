import React from "react";
import Navbar from "../components/Navbar";
import LoginCard from '../components/Logincard'

export default function Landing() {

    return (
      <div className="d-flex flex-column inner-height landing">
        <Navbar />
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
            <LoginCard />
          </div>
        </div>
      </div>
    );
  }
  