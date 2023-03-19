import React, { useState, useEffect } from "react";
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";

export default function WisdomInfo(props) {

  return (
    <div>
      <Stack gap={5}>
      <form>
        <div className="bg-light border">
          <div className="form-group">
            <label htmlFor="Recieve" className="form-label mt-4">Would you like to receive wisdom?</label>
            <select className="form-select" id="exampleSelect1">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <div className="bg-light border">
          <div className="form-group">
            <label htmlFor="Contribute" className="form-label mt-4">Would you like to contribute wisdom?</label>
            <select className="form-select" id="exampleSelect1">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        {/* <div className="bg-light border">
          <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">Please enter your occupation</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""></input>
          </div>
        </div> */}
      </form>
      </Stack>
      <br />
      <button type="button" className="btn btn-warning" onClick={props.prevPage}>Prev</button>
      <button type="button" className="btn btn-warning" onClick={props.nextPage}>Next</button>
    </div>
  );
}