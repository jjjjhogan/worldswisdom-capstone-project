import React from "react";
import Stack from 'react-bootstrap/Stack';
import "../components/Question_answer_style.css"
export default function Question_answer() {
  
  return (
    <div>
    <Stack gap={5}>
    <form>
    
    <div class="form-group">
        <label for="exampleInputEmail1" className="title">Description</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"></input>
    </div>
    <br/>
    <div className="selection">
    <label className="label">Answer Type:</label>
      <div class="form-check" style={{display:'inline-block'}} className="video">
        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" ></input>
        <label class="form-check-label" for="optionsRadios1">Video</label>
      </div>
      <div class="form-check" style={{display:'inline-block'}} className="audio">
        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2"></input>
        <label class="form-check-label" for="optionsRadios2">Audio</label>
      </div>
      </div>
      <br/>
    <div className="bg-light border">
        <label className="upload">File Upload:</label>
        <div class="form-group">
      <label for="formFile" class="form-label mt-4"></label>
      <input class="form-control" type="file" id="formFile" ></input>
    </div>
    </div>
    </form>
    </Stack>
    <br/>
    <button type="button" class="btn btn-warning">Submit</button>
    </div>
  );
}
