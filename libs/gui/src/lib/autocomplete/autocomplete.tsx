import React from "react";
import ReactDOM from 'react-dom';

import "./autocomplete.css";

export const Autocomplete = (props) => {

  const [input,setInput] = React.useState(props.input || ''); //expression

  const changeHandler = evt => {
    setInput(evt.target.value);
  }

  return (
    <React.Fragment>

        <h1>Type in you search:</h1>

        <div className="md-form">
         <input type="search" 
          id="form-autocomplete"
          className="form-control mdb-autocomplete"
          value={input}
          onChange={changeHandler} 
          placeholder={props.placeholder}
          onBlur={ () => (typeof props.action === 'function') && props.action(input) }/>
          <div>
          {input && props.data.filter( value => value.startsWith(input)).map( (value,num) => <div key={num} onClick={ ()=> setInput(value) }>{value}<hr/></div>)}
          </div>
        </div>

    </React.Fragment>
  );
};

export default Autocomplete;
