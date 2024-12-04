import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { logUser } from '../services/allApis';
import { toast } from 'react-toastify';

export default function Loginpage() {

    const [log,setLog]=useState({})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


// const logHandler=(e)=>{
// const [name,value]=e.target 
//     }

const logClicked=async(e)=>{
    e.preventDefault()

    const result=await logUser(log)
    console.log(result)

    if(result.status==200){
        toast.success("Logged success")
    }else{
        toast.error("login failed")
    }
}

console.log(log)

  return (
    <div>

<Button variant="primary" onClick={handleShow}>
        Login
      </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              onChange={(e)=>setLog({...log,email:e.target.value})}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
              onChange={(e)=>setLog({...log,password:e.target.value})}
                type="password"
                placeholder="password"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>logClicked(e)}>
           Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}





