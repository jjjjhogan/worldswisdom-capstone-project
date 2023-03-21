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
  padding: '50px',
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
  const [questionText, setQuestionText] = useState();
  const [description, setDescription] = useState();
  const [searchParams] = useSearchParams();
  const [file, setFile] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const questionId = searchParams.get("questionId");
    setQuestionId(questionId);
    const questionText = searchParams.get("questionText");
    setQuestionText(questionText);
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
    <form>
    <legend>Post an Answer</legend>
    <div className="form-group">
    <label className="title">Question:</label>
        <input className="form-control" placeholder={questionText} readonly="readonly"></input>
        <br/>
        <label htmlFor="exampleInputEmail1" className="title">Description:</label>
        <textarea className="form-control" placeholder="Description"></textarea>
    </div>
    <br/>
    <label htmlFor="exampleInputEmail1" className="title">Video/Audio:</label>
    <br/><br/>
      <div className="container-fluid">
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
    <br/>
    <button type="button" className="btn btn-warning" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
