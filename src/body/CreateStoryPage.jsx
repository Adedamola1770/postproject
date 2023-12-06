import React from 'react'
import '../styles/CreateStoryPage.css'
import { Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const CreateStoryPage = () => {
  return (
    <div>
        <div className='container pt-5'>
            <h2 className='fw-bold'>Create Story</h2>
            <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput"></Form.Label>
          <Form.Control id="TextInput" placeholder="Title" />
        </Form.Group>
       
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput"></Form.Label>
          <Form.Control id="TextInput" placeholder="Tags" />
        </Form.Group>
        <div className=''>
        <textarea id="w3review" name="w3review" rows="15" cols="174" className='border-none'placeholder='write your story...'></textarea>
        </div>
        <div className='text-center'>

       <Link to={'/Stories'}>
       <Button type="submit" className='btn-2 mt-5'>Publish Story</Button>
       </Link>
        </div>
      </fieldset>
    </Form>
        </div>
    </div>
  )
}

export default CreateStoryPage