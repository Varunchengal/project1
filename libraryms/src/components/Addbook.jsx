import { Category } from '@mui/icons-material';
import react, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { bookAdd } from '../services/allApis';
import './main.css'
import UploadIcon from '@mui/icons-material/CloudUpload';
export default function Addbook(){
    
    const [show, setShow] = useState(false);
    const [book,setBook]=useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addBook=async(e)=>{
      e.preventDefault()

      if(book){

        const books=new FormData()
        books.append("title",book.title)
        books.append("author",book.author)
        books.append("description",book.description)
        books.append("cover",book.cover)
        books.append("count",book.count)
        books.append("category",book.category)

        const header={
          'Content-Type':'multipart/form-data'
        }
        const result=await bookAdd(books,header)
        console.log(result)
      }else{

      }

    }

    console.log(book)
    return(
        <div><div className='book-add'>
        <table><tbody>    
          <tr> 
            <td>       
            <div className='upload'> <input style={{display:'nonei'}} type="file"/><UploadIcon sx={{ fontSize: 50 }}/></div> </td><td>
             <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control 
              onChange={(e)=>setBook({...book,title:e.target.value})}
                type="text"
                placeholder="Title here"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
              onChange={(e)=>setBook({...book,description:e.target.value})}
                as="textarea"
                placeholder="password"
                autoFocus
              />
            </Form.Group>

   

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control 
              onChange={(e)=>setBook({...book,author:e.target.value})}
                type="text"
                placeholder="Title here"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Count</Form.Label>
              <Form.Control 
            
              onChange={(e)=>setBook({...book,count:e.target.value})}
                type="text"
                placeholder="add book count"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" onChange={(e)=>setBook({...book,Category:e.target.value})}>
                <option selected disabled>-select-</option>
                <option>Novel</option>
                <option>Poem</option>
                <option>Short Story</option>
                <option value="">Biography</option>
              </Form.Select>
              {/* <Form.Control 
              onChange={(e)=>setLog({...log,email:e.target.value})}
                type="text"
                placeholder="add category"
                autoFocus
              /> */}
            </Form.Group>
          </Form>
          </td> </tr>
          </tbody>
          </table>
        {/* </Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>addBook(e)}>
          Add
          </Button>
        </Modal.Footer>
      {/* </Modal> */}
      </div></div>
    )
}