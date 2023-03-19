import React, {useState, useEffect} from "react";
import Stack from 'react-bootstrap/Stack';
import { getCategories } from "../services/WorldsWisdomCore";


export default function RegisterCategories(props) {
  const [categories, setCategories] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await getCategories();
      const categoryNames = categoriesData.map(category => category.categoryName);
      setCategories(categoryNames);
    }

    fetchCategories();
  }, []);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateFormData({chosenCategories: checkedItems});
  }

  return (
    <div>
      <p><small>Build your wisdom by discovering areas of interest!</small></p>
      <br />
      <br />
      {categories.map((categoryName, index) => (
        <div className="bg-light border" key={index}>
          <div className="form-check">
            <input className="form-check-input"
                  type="checkbox"
                  value={categoryName}
                  onChange={handleCheckboxChange}
                  id={"flexCheckDefault" + index} ></input>
            <label className="form-check-label" htmlFor={"flexCheckDefault" + index}>{categoryName}</label>  
          </div>
        </div>
      ))}
      <br />
      <button type="button" className="btn btn-warning" onClick={props.prevPage}>Prev</button>
      <button type="button" className="btn btn-warning" onClick={handleSubmit}>Submit</button>
    </div>
  );
}