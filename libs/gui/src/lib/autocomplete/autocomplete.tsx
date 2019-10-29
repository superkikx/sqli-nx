import React from "react";
import ReactDOM from 'react-dom';

import "./autocomplete.css";

export const Autocomplete = (props) => {
  return (
    <React-Fragment>
      <h1>Welcome to autocomplete component!</h1>

        <div className="md-form">
          <input type="search" id="form-autocomplete" className="form-control mdb-autocomplete"/>

         <label for="form-autocomplete" className="active">What is your favorite US state?</label>
        </div>

    </React-Fragment>
  );
};

export default Autocomplete;
