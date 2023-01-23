// import React from 'react';
// import Container from 'react-bootstrap/esm/Container';
// import {useDropzone} from 'react-dropzone';

// function BasicDropzone(props) {
//     const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
//         // Disable click and keydown behavior
//         noClick: true,
//         noKeyboard: true
//       });

//       const files = acceptedFiles.map(file => (
//         <li key={file.path}>
//           {file.path} - {file.size} bytes
//         </li>
//       ));
    
//       return (
//         <Container>
//         <div className="container" style={styles.dropzone}>
//           <div {...getRootProps({className: 'dropzone'})}>
//             <input {...getInputProps()} />
//             <br/>
//             <p>Drag 'n' drop some files here</p>
//             <br/>
//             <button type="button" onClick={open}>
//               Open File Dialog
//             </button>
//             <br/><br/>
//           </div>
//           <aside>
//             <br/><br/>
//             <h4>Files</h4>
//             <ul>{files}</ul>
//           </aside>
//         </div>
//         </Container>
//       );
// }

import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import {useDropzone} from 'react-dropzone';
import axios from "axios";
import styles from './comp_styles.css';


const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function BasicDropzone(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps,open, acceptedFiles} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    },
    noClick: true,
    noKeyboard: true
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    for(var x = 0; x<files.length; x++) {
        data.append('file', files[x])
    }
    console.log(files)
    console.log(data)
    axios.post("http://localhost:5000/upload", data)
    .then(res => { 
        console.log(res.statusText)
      })
}

  const thumbs = files.map(file => (
    <div className={styles.cont} key={file.name}>
    <div style={thumb} >
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
    <br/>
    {file.name} - {file.size/1000}KB
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Container style={{"textAlign":'center'}}>
    <section className="container" style={styles.dropzone}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <br/>
        <p>Drag 'n' drop some files here, or click to select files</p>
        <br/>
            <button type="button" className="btn btn-primary mt-3" onClick={open}>
              Open File Dialog
            </button>
            <br/><br/>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
    <button 
    className="btn btn-primary mt-3" 
    onClick={handleSubmit}
    >Upload</button>
    </Container>
  );
}

export default BasicDropzone;