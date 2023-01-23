import React,{useState, UseEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import BasicDropzone from "./BasicDropzone"
import axios from 'axios';

function BasicExample() {


    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(files)
        console.log(metadata)
        axios.post("http://localhost:5000/uploadmetadata", metadata)
        .then(res => { 
            console.log(res)
          })
    }
    const [metadata,setMetadata]= useState({
      name:"",
      desc: "",
      image: "",
      trait1Name:"",
      trait1Value:"",
      trait2Name:"",
      trait2Value:"",
      trait3Name:"",
      trait3Value:"",
      trait4Name:"",
      trait4Value:"",
    })
  return (
    <Form>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>NFT Name</Form.Label>
        <Form.Control type="text" placeholder="enter an name for your NFT" value={metadata.name} onChange={(e)=>{setMetadata({...metadata,name:e.target.value })}} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>   */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDesc">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Write your NFT Details here" value={metadata.desc} onChange={(e)=>{setMetadata({...metadata,desc :e.target.value })}} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

        <Container>
          <BasicDropzone/>
        </Container>

    <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Enter the Name of the Image</Form.Label>
        <Form.Control type="text" placeholder="image Name" value={metadata.image} onChange={(e)=>{setMetadata({...metadata,image : e.target.value })}}/>
        {/* <Form.Text className="text-muted">
          Preffered IPFS but any URL will do
        </Form.Text>   */}
      </Form.Group>  
    
      
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-attribute-1">Trait 1 Name</InputGroup.Text>
      <Form.Control aria-label="First name" value={metadata.trait1Name} onChange={(e)=>{setMetadata({...metadata,trait1Name : e.target.value })}} />
      <InputGroup.Text>Value</InputGroup.Text>
      <Form.Control aria-label="Last name" value={metadata.trait1Value} onChange={(e)=>{setMetadata({...metadata,trait1Value : e.target.value })}}/>
    </InputGroup>
    
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-attribute-2">Trait 2 Name</InputGroup.Text>
      <Form.Control aria-label="First name" value={metadata.trait2Name} onChange={(e)=>{setMetadata({...metadata,trait2Name : e.target.value })}}/>
      <InputGroup.Text>Value</InputGroup.Text>
      <Form.Control aria-label="Last name" value={metadata.trait2Value} onChange={(e)=>{setMetadata({...metadata,trait2Value : e.target.value })}}/>
    </InputGroup>
    
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-attribute-3">Trait 3 Name</InputGroup.Text>
      <Form.Control aria-label="First name" value={metadata.trait3Name} onChange={(e)=>{setMetadata({...metadata,trait3Name : e.target.value })}}/>
      <InputGroup.Text>Value</InputGroup.Text>
      <Form.Control aria-label="Last name" value={metadata.trait3Value} onChange={(e)=>{setMetadata({...metadata,trait3Value : e.target.value })}}/>
    </InputGroup>

    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-attribute-4">Trait 4 Name</InputGroup.Text>
      <Form.Control aria-label="First name" value={metadata.trait4Name} onChange={(e)=>{setMetadata({...metadata,trait4Name : e.target.value })}}/>
      <InputGroup.Text>Value</InputGroup.Text>
      <Form.Control aria-label="Last name" value={metadata.trait4Value} onChange={(e)=>{setMetadata({...metadata,trait4Value : e.target.value })}}/>
    </InputGroup>

      


      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;