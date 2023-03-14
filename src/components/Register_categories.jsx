import React from "react";
import Stack from 'react-bootstrap/Stack';
export default function Register_categories() {
  
  return (
    <div>
      <h2>Welcome to WolrdsWisdom</h2>
      <p><small>Build your wisdom by discovering areas of interest!</small></p>
      <br />
      <br />
      
      <div className="bg-light border">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label class="form-check-label" for="flexCheckDefault">History</label>  
        </div>
      </div>
      <div className="bg-light border">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label class="form-check-label" for="flexCheckDefault">Relationship</label>  
        </div>
      </div>
      <div className="bg-light border">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label class="form-check-label" for="flexCheckDefault">Chemistry</label>  
        </div>
      </div>
      <div className="bg-light border">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label class="form-check-label" for="flexCheckDefault">Astronomy</label>  
        </div>
      </div>
      <div className="bg-light border">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label class="form-check-label" for="flexCheckDefault">Life</label>  
        </div>
      </div>
      <br />
      <button type="button" class="btn btn-warning">Save</button>
    </div>
  );
}