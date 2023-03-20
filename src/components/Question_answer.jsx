import Stack from 'react-bootstrap/Stack';
import "../components/Question_answer_style.css"
import React, { useMemo, useState, useCallback } from "react";

import {useDropzone} from 'react-dropzone'

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

export default function Question_answer() {
  const [file, setFile] = useState([]);
	const onDrop = useCallback(acceptedFile => {
		setFile(acceptedFile);
	})

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
        <label for="exampleInputEmail1" className="title">Description</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"></input>
    </div>
    <br/>
    <div className="selection">
    <label className="label">Answer Type:</label>
      <div className="form-check video" style={{display:'inline-block'}}>
        <input className="form-check-input" type="radio" defaultChecked name="optionsRadios" id="optionsRadios1" value="option1" ></input>
        <label className="form-check-label" for="optionsRadios1">Video</label>
      </div>
      <div className="form-check audio" style={{display:'inline-block'}}>
        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2"></input>
        <label className="form-check-label" for="optionsRadios2">Audio</label>
      </div>
      </div>
      <br/>
      <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} accept="video/*, audio/*"/>
        <p>Click to choose wisdom or drag 'n drop your wisdom!</p>
      </div>
      { file!='' ? (
      <div>
      		<p>{file[0].path}</p>
      </div> ) : (<div></div>)}
    </div>
    </form>
    </Stack>
    <br/>
    <button type="button" className="btn btn-warning">Submit</button>
    </div>
  );
}
