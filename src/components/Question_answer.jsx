import React from "react";
import Stack from 'react-bootstrap/Stack';
export default function Question_answer() {
  
  return (
    <div>
    <Stack gap={5}>
    <form>
    <div className="bg-light border">
    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label mt-4">Description</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"></input>
    </div>
    </div>
    <div className="bg-light border">
        <p>Type:</p>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" ></input>
        <label class="form-check-label" for="optionsRadios1">Video</label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2"></input>
        <label class="form-check-label" for="optionsRadios2">Audio</label>
        </div>
    </div>
    <div className="bg-light border">
        <p>File Upload:</p>
        <div class="form-group">
      <label for="formFile" class="form-label mt-4"></label>
      <input class="form-control" type="file" id="formFile" ></input>
    </div>
    </div>
    </form>
    </Stack>
    <button type="button" class="btn btn-warning">Submit</button>
    </div>
  );
}
