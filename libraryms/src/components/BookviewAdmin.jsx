import { Category } from '@mui/icons-material';
import react, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { bookVieww } from '../services/allApis';



export default function BookviewAdmin(){
    
  const [bookView,setBookView]=useState(
    
  )

const viewBook=async()=>{
  const result=await bookVieww()
  console.log(result)

  setBookView(result)
}

useEffect(()=>{
viewBook()
},[])

console.log(bookView)
    return(
        <div>
           <Table>
            <thead><tr><th>Title</th>
            <th>Description</th>
            <th>Cover</th>
            <th>Author</th>
            <th>Count</th>
            <th>Category</th>
            <th></th>
            <th></th>
            </tr></thead><tbody>
            { bookView?.map((item)=>(
              <tr>
                <td>{item.title}</td>
              <td>{item.discription}</td>
              <td>{item.discription}</td>
              <td>{item.discription}</td>
              <td>{item.discription}</td>
              <td>{item.discription}</td>
              <td></td>
              <td></td></tr>
            ))}

            </tbody>
           </Table>
        </div>
    )
}