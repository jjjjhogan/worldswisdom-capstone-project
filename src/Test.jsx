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

export default function Test(props) {
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
  	<>
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} accept="video/*, audio/*"/>
        <p>Drag 'n' drop video/audio file here</p>
      </div>
      { file!='' ? (
      <div>
      		<p>{file[0].path}</p>
      </div> ) : (<div></div>)}
    </div>
    </>
  );
}