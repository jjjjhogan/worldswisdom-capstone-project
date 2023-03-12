import React from "react";
import Stack from 'react-bootstrap/Stack';
export default function Question_post() {
  
  return (
    <div>
    <Stack gap={5}>
    <form>
    <div className="bg-light border">
    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label mt-4">Title</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title for you question"></input>
    </div>
    </div>
    <div className="bg-light border">
    <div class="form-group">
        <label for="exampleSelect2" class="form-label mt-4">Category</label>
        <select multiple="" class="form-select" id="exampleSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    </div>
    <div className="bg-light border">
    <div class="form-group">
        <label for="exampleTextarea" class="form-label mt-4">Description</label>
        <textarea class="form-control" id="exampleTextarea" rows="3" spellcheck="false"></textarea>
    </div>
    </div>
    </form>
    </Stack>
    <button type="button" class="btn btn-warning">Post</button>
    </div>
  );
}
