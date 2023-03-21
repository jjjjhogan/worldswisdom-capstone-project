import Stack from 'react-bootstrap/Stack';
import "../components/Question_answer_style.css"
import React, { useMemo, useState, useCallback, useEffect } from "react";
import {useDropzone} from 'react-dropzone';
import { postAnswer } from "../services/WorldsWisdomCore";
import { useNavigate, useSearchParams } from "react-router-dom";

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


export default function Question_answer(props) {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(props);
  const [questionId, setQuestionId] = useState();
  const [description, setDescription] = useState();
  const [searchParams] = useSearchParams();
  const [file, setFile] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const questionId = searchParams.get("questionId");
    setQuestionId(questionId);
    const data = JSON.parse(sessionStorage.getItem("userData"));
    if (data) {
      setUserData(data);
    }
  }, []);

	const onDrop = useCallback(acceptedFile => {
		setFile(acceptedFile[0]);
	},[setFile]);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { payload }= await postAnswer({ 
        questionId: questionId,
        userId: userData.userId,
        description: description,
        file
      });
      setIsLoading(false);
      if (payload){
        const searchQuery = "?questionId=" + questionId;
        // navigate({pathname: "/answerdisplay", search: searchQuery});
        navigate(-1);
        // window.location.reload();
      }
      else{
        alert("connection error, please try again");
      }

    } catch(error) {
      setIsLoading(false);
      alert("connection error");
      console.log(error);
    }
  } 

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
  	accept: {
      'video/*': [],
      'audio/*': []
    },
    onDrop});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);
  return (
    <div>
    <Stack gap={5}>
    <form>
    
    <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="title">Description</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"></input>
    </div>
    <br/>
    <div className="selection">
    <label className="label">Answer Type:</label>
      <div className="form-check video" style={{display:'inline-block'}}>
        <input className="form-check-input" type="radio" defaultChecked name="optionsRadios" id="optionsRadios1" value="option1" ></input>
        <label className="form-check-label" htmlFor="optionsRadios1">Video</label>
      </div>
      <div className="form-check audio" style={{display:'inline-block'}}>
        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2"></input>
        <label className="form-check-label" htmlFor="optionsRadios2">Audio</label>
      </div>
      </div>
      <br/>
      <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} name="file" accept="video/*, audio/*"/>
        <p>Click to choose wisdom or drag 'n drop your wisdom!</p>
      </div>
      { file!='' ? (
      <div>
      		<p>{file.path}</p>
      </div> ) : (<div></div>)}
    </div>
    </form>
    </Stack>
    <br/>
    <button type="button" className="btn btn-warning" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
