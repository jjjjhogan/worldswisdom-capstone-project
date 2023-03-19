import React, { useState, useEffect } from "react";
import './RegisterInfo.css'
import Stack from 'react-bootstrap/Stack';

export default function RegisterInfo(props) {
  const [data, setData] = useState({ userName: "", firstName: "", lastName: "", occupations: "" });
  
  function handleInputChange(event) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.updateFormData(data);
    props.nextPage();
  }

  return (
    <div>
      <Stack gap={5}>
        <form id="registerInfoForm" onSubmit={submitHandler}>
          <div className="bg-light border">
            <div className="form-group">
              <input type="text" className="form-control" name="userName" onChange={handleInputChange} placeholder="Enter display name"></input>
            </div>
          </div>
          <div className="bg-light border">
            <div className="form-group">
              <input type="text" className="form-control" name="firstName" onChange={handleInputChange} placeholder="Enter first name"></input>
            </div>
          </div>
          <div className="bg-light border">
            <div className="form-group">
              <input type="text" className="form-control" name="lastName" onChange={handleInputChange} placeholder="Enter last name"></input>
            </div>
          </div>
          <div className="bg-light border">
            <div className="form-group">
              <input type="text" className="form-control" name="occupations" onChange={handleInputChange} placeholder="What is your occupation?"></input>
            </div>
          </div>
        </form>
      </Stack>
      <br />
      <button type="submit" form="registerInfoForm" className="btn btn-warning">Next</button>
    </div>
  );
}
