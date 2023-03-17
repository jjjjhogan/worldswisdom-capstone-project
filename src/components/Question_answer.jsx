import React from "react";
import Stack from 'react-bootstrap/Stack';
import "../components/Question_answer_style.css"
export default function Question_answer() {
  
  return (
    <div>
    <Stack gap={5}>
    <form>
    
    <div className="form-group">
        <label for="exampleInputEmail1" className="title">Description</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"></input>
    </div>
    <br/>
    <div className="selection">
    <label className="label">Answer Type:</label>
      <div className="form-check video" style={{display:'inline-block'}}>
        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" ></input>
        <label className="form-check-label" for="optionsRadios1">Video</label>
      </div>
      <div className="form-check audio" style={{display:'inline-block'}}>
        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2"></input>
        <label className="form-check-label" for="optionsRadios2">Audio</label>
      </div>
      </div>
      <br/>
    <div className="bg-light border">
        <label className="upload">File Upload:</label>
        <div className="form-group">
      <label for="formFile" className="form-label mt-4"></label>
      <input className="form-control" type="file" id="formFile" ></input>
    </div>
    </div>
    </form>
    </Stack>
    <br/>
    <button type="button" className="btn btn-warning">Submit</button>
    </div>
  );
}
