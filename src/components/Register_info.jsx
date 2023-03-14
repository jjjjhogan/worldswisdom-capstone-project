import React from "react";
import './Register_info.css'
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";

export default function Register_info() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`${process.env.PUBLIC_URL}/register2`);
  }
  
  return (
    <div>
    
    <Stack gap={5}>
    <form>
    <div className="bg-light border">
    <div class="form-group">
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter display name"></input>
    </div>
    </div>
    <div className="bg-light border">
    <div class="form-group">
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first name"></input>
    </div>
    </div>
    <div className="bg-light border">
    <div class="form-group">
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter last name"></input>
    </div>
    </div>
    <div className="bg-light border">
    <div class="form-group">
      <input type='date' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e=>e.target.value}></input>
    </div>
    </div>
    </form>
    </Stack>
    <br />
    <button type="button" class="btn btn-warning" onClick={handleClick}>Next</button>

   
    </div>
  );
}
