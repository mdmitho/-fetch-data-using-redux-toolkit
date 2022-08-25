import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteBook } from './BooksSlice';
import { Link }  from "react-router-dom";
const BooksView = () => {

const books = useSelector((state) => state.booksReducer.books);
// console.log(books)

const dispatch = useDispatch()

const handleDeleteBook  = (id) => {
dispatch(deleteBook(id))
}

    return (
      <div>
        <h1>List of Books</h1>

        <table className="container mx-auto my-3">
          <thead>
            <tr className="j">
              <th className="border-2 p-3">ID</th>
              <th className="border-2 p-3">Title</th>
              <th className="border-2 p-3">Author</th>
              <th className="border-2 p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, title, author } = book;
                return (
                  <tr>
                    <td className="border-2 p-3">{id}</td>
                    <td className="border-2 p-3">{title}</td>
                    <td className="border-2 p-3">{author}</td>
                    <td className="border-2 p-3">
                      <Link to="/editBook" state={{id,title,author}}>
                        <button className="m-2 border-2 p-2 border-black-500">Edit</button>
                      </Link>
                      <button
                        onClick={() => {
                          handleDeleteBook(id);
                        }}
                        className="m-2 border-2 p-2 border-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
};

export default BooksView;