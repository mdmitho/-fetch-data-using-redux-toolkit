import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddBook from '../AllBook/AddBook';

import Error from '../Pages/Error';
import Home from '../Pages/Home';
import ShowBooks from './ShowBooks';
import EditBook from '../AllBook/EditBook';

export const Index = () => {
  return (
    <>
  
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/showBooks" element={<ShowBooks />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/editBook" element={<EditBook />} />
      </Routes>
    </>
  );
}
export default Index;