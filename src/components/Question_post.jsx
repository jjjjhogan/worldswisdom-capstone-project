import { React, useState, useEffect} from "react";
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";
import "../components/Question_post_style.css";
import { getCategories, postQuestion } from "../services/WorldsWisdomCore";

export default function Question_post() {  
  const [categories, setCategories] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }
    fetchCategories();

    const data = JSON.parse(sessionStorage.getItem("userData"));
    if (data) {
      setUserData(data);
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const questionTitle = event.target.questionTitle.value;
    const category = event.target.category.value;
    const userId = userData.userId; // this needs to be changed
    const questionObj = await postQuestion(userId, questionTitle, category);
    navigate(-1);
  }

  return (

    <div>
    <h4>Post a Question</h4>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label  className="title">Question:</label>
          <input name="questionTitle" className="form-control" id="exampleInputEmail1" placeholder="What is your question?"></input>

      </div>
      
      <div className="form-group">
          <label className="category">Category:</label>
          <select multiple="" className="form-select" id="exampleSelect2" name="category">
              {categories.map((category, index) => (
                <option key={index} value={category.categoryName}>{category.categoryName}</option>
              ))}
              
          </select>
      </div>
      <br/>
      <input type="submit" className="btn btn-warning" value="Post"></input>
    </form>
    </div>
  );
}

