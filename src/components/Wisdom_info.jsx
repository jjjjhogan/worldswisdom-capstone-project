import React from "react";
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";

export default function Wisdom_info() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`${process.env.PUBLIC_URL}/register3`);
  }
  
  return (
    <div>
    <Stack gap={5}>
    <form>
    <div className="bg-light border">
    <div className="form-group">
      <label for="Recieve" className="form-label mt-4">Would you like to receive wisdom?</label>
      <select className="form-select" id="exampleSelect1">
        <option></option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    </div>
    <div className="bg-light border">
    <div className="form-group">
      <label for="Contribute" className="form-label mt-4">Would you like to contribute wisdom?</label>
      <select className="form-select" id="exampleSelect1">
        <option></option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    </div>
    <div className="bg-light border">
    <div className="form-group">
    <label for="exampleInputEmail1" className="form-label mt-4">Please enter your occupation</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""></input>
    </div>
    </div>
    </form>
    </Stack>
    <br />
    <button type="button" className="btn btn-warning" onClick={handleClick}>Next</button>
    </div>
  );
}