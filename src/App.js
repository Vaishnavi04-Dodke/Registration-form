import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});


  const getvalue = (e) => {

    let input = e.target
    console.log(input);

    let Data = "";
    let props = input.name;
    if (input.type === "file") {
      Data = input.files[0].name;
    }
    else {

      Data = input.value
    }

    // console.log(input.file.value);
    console.log(Data);
    return (
      setFormData((old)=>{
        return{
        ...old,
        [props]:Data
        }
      }
         
      )
    )
  }
  function getData(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (

    <>
      <button className="btn btn-primary " onClick={() => setShow(true)}>
        <i className="fa fa-plus" aria-hidden="true"></i>Add User
      </button>
      <div id='content'></div>
      <br />
      <Container>
        <Modal show={show}>
          <Modal.Header closeButton onClick={() => setShow(false)}>
            <Modal.Title>User Registration</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={getData}>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name='name' onChange={getvalue} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' onChange={getvalue} />

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="number" placeholder=" Enter Mobile Number" name='mobile' onChange={getvalue} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' onChange={getvalue} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFile">
                <Form.Label>Upload Profile Image</Form.Label>
                <Form.Control type="file" placeholder="File" name='file' onChange={getvalue} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>

  );
}

export default App;

