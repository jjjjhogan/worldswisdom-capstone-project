import React from "react";
import Stack from 'react-bootstrap/Stack';
import "../components/Question_post_style.css"
export default function Question_post() {
  
  return (
    <div>
    <Stack gap={50}>
    <form>
    <div class="form-group">
        <label  className="title">Title</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title for you question"></input>

    </div>
    
    <div class="form-group">
        <label className="category">Category</label>
        <select multiple="" class="form-select" id="exampleSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div className="bg-light border">
    <div class="form-group">
        <label className="description">Description</label>
        <textarea class="form-control" id="exampleTextarea" rows="3" spellcheck="false"></textarea>
    </div>
    </div>
    </form>
    </Stack>
    </div>
  );
}
