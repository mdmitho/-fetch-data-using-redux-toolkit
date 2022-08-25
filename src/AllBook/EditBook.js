import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useLocation} from "react-router-dom"
import { updateBook } from './BooksSlice';
import {useNavigate} from "react-router-dom"
const EditBook = () => {
    const location = useLocation()
    // console.log(location)
    const [id,setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title);
    const [author,setAuthor] = useState(location.state.author)

    const dispatch = useDispatch()
    const navigate = useNavigate()

const handleSubmit = (e) =>{
    e.preventDefault()
   dispatch(updateBook({ id, title, author })); 
   navigate("/showBooks",{replace:true})
   
}

    return (
      <div className='bg-slate-500 m-5 p-5'>
        <h1>EditBook</h1>

        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="my-2">
            <label htmlFor="author">Author : </label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <button className="border-2 p-2 bg-white" type="submit">
            Update Book
          </button>
        </form>
      </div>
    );
};

export default EditBook;