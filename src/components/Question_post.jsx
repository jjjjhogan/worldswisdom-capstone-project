import React from "react";
import Stack from 'react-bootstrap/Stack';
import "../components/Question_post_style.css"
import { postQuestion } from "../services/WorldsWisdomCore";
export default function Question_post() 
{
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }
    fetchCategories();
  }, []); 
  async function onSubmit(title,question_category){
    userId = ""
    const questionObj = await postQuestion(userId,title,question_category)
  }
  return (

    <div>
    <Stack gap={50}>
    <form onSubmit={onSubmit}>
    <div className="form-group">
        <label  className="title">Title</label>
        <input type="Title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title for you question"></input>

    </div>
    
    <div className="form-group">
        <label className="category">Category</label>
        <select multiple="" className="form-select" id="exampleSelect2">
            {categories.map((category, index)=>(
                <option value={category}>{category}</option>
            ))}
          
        </select>
    </div>
    <br />
    </form>
    <input type='submit' value='Submit'/>
    </Stack>
    </div>
  );
}

