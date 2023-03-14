import React from "react";
import Question_post from "../components/Question_post";
import NavBar from "../components/Navbar"
import "../components/Question_post_style.css"
export default function Question_post_container() {

    return (
      <div className="d-flex flex-column inner-height landing">
        <NavBar/>
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
          </div>
          <Question_post />
          <button type="button" class="btn btn-warning" >post</button>
        </div>
        <div>
       
        </div>
      </div>
    );
  }
