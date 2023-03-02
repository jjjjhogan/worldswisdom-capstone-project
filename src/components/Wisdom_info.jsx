import React from "react";
import Stack from 'react-bootstrap/Stack';
export default function Wisdom_info() {
  
  return (
    <div>
    <Stack gap={5}>
    <form>
    <div className="bg-light border">
    <div class="form-group">
      <label for="Recieve" class="form-label mt-4">Would you like to receive wisdom?</label>
      <select class="form-select" id="exampleSelect1">
        <option></option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    </div>
    <div className="bg-light border">
    <div class="form-group">
      <label for="Contribute" class="form-label mt-4">Would you like to contribute wisdom?</label>
      <select class="form-select" id="exampleSelect1">
        <option></option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    </div>
    <div className="bg-light border">
    <div class="form-group">
    <label for="exampleInputEmail1" class="form-label mt-4">Please enter your occupation</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""></input>
    </div>
    </div>
    </form>
    </Stack>
    <button type="button" class="btn btn-warning">Next</button>
    </div>
  );
}