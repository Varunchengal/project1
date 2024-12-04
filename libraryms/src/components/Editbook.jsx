
import react, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { bookAdd } from '../services/allApis';

export default function Adminpage(){
    
    const [show, setShow] = useState(false);
    const [book,setBook]=useState({})
    const [bookEdited,setBookEdited]=useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const EditBook=async(e)=>{
      e.preventDefault()

      if(book){

        const result=await bookAdd(books,header)
        console.log(result)
      }else{

      }

    }

    console.log(book)
    return(
        <div>
            <Button onClick={handleShow}>Add Book</Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control 
              onChange={(e)=>setBookEdited({...bookEdited,title:e.target.value})}
                type="text"
                placeholder="Title here"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
              onChange={(e)=>setBookEdited({...bookEdited,description:e.target.value})}
                as="textarea"
                placeholder="password"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cover</Form.Label>
              <Form.Control 
              onChange={(e)=>setBookEdited({...bookEdited,cover:e.target.files[0]})}
                type="file"
                placeholder="Title here"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control 
              onChange={(e)=>setBookEdited({...bookEdited,author:e.target.value})}
                type="text"
                placeholder="Title here"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Count</Form.Label>
              <Form.Control 
              name="count"
              onChange={(e)=>setBookEdited({...bookEdited,count:e.target.value})}
                type="text"
                placeholder="add book count"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" onChange={(e)=>setBookEdited({...bookEdited,Category:e.target.value})}>
                <option selected disabled>-select-</option>
                <option>Novel</option>
                <option>Poem</option>
                <option>Short Story</option>
              </Form.Select>
              {/* <Form.Control 
              onChange={(e)=>setLog({...log,email:e.target.value})}
                type="text"
                placeholder="add category"
                autoFocus
              /> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>addBook(e)}>
          Add
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}