import React from "react";
import ReactDOM from 'react-dom';

import "./autocomplete.css";

export const Autocomplete = (props) => {

const changeHandler = () => alert("hello");

const changeHandler2 = evt => {
console.log(evt);
 props.title ='test';
}

  return (
    <React-Fragment>
      <h1>Welcome to autocomplete component!</h1>

        <div className="md-form">
         <input type="search" id="form-autocomplete" className="form-control mdb-autocomplete" onChange={changeHandler} />
         <label for="form-autocomplete" className="active">What is your favorite US state? {props.data}</label>
        </div>

    </React-Fragment>
  );
};

export default Autocomplete;
