import { React, useState, useEffect} from "react";
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from "react-router-dom";
import "../components/Question_post_style.css";
import { getCategories, postQuestion } from "../services/WorldsWisdomCore";

export default function Question_post() {  
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }
    fetchCategories();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const questionTitle = event.target.questionTitle.value;
    const category = event.target.category.value;
    const userId = "123456"; // this needs to be changed
    const questionObj = await postQuestion(userId, questionTitle, category);
    navigate(-1);
  }

  return (
    <div>
    <Stack gap={50}>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label  className="title">Title</label>
          <input name="questionTitle" className="form-control" id="exampleInputEmail1" placeholder="Title for your question"></input>

      </div>
      
      <div className="form-group">
          <label className="category">Category</label>
          <select multiple="" className="form-select" id="exampleSelect2" name="category">
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
              
          </select>
      </div>
      <div className="bg-light border">
      <div className="form-group">
          <label className="description">Description</label>
          <textarea className="form-control" id="exampleTextarea" rows="3" spellCheck="false"></textarea>
      </div>
      </div>
      <input type="submit" className="btn btn-warning" value="Post"></input>
    </form>
    </Stack>
    </div>
  );
}
