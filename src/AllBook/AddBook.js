import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';
import { v4 as uuidv4 } from "uuid";


const AddBook = () => {
    const [title, setTitle]=useState("")
    const [author, setAuthor] = useState("");
const dispatch = useDispatch()
const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        const book ={id:uuidv4() , title, author}
        dispatch(addBook(book))
        navigate("/showBooks",{replace:true})
    }

    return (
      <div className="bg-orange-300 my-5 py-5">
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
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
          <button className='border-2 p-2 bg-white' type='submit'>Add Book</button>
        </form>
      </div>
    );
};

export default AddBook;