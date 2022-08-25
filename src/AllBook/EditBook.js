import React from 'react';
import {useLocation} from "react-router-dom"

const EditBook = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h1>EditBook</h1>
        </div>
    );
};

export default EditBook;