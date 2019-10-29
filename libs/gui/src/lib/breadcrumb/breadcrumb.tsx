import React from "react";
import propTypes from './breadcrumb.props'
import "./breadcrumb.css";

export const BreadcrumbSqli = (props) => {
    return (
      <nav className="breadcrumb">
          <ul className="list">
              { props.trail && props.trail.map( (link, indice ) => (
                  <li className="list-item" key={ indice }>
                      <a href={link.action}>{link.label}</a>
                  </li>
                  )
                )
              }
          </ul>
      </nav>
  );
};
BreadcrumbSqli.defaultProps = {
    trail:[]
};
BreadcrumbSqli.propTypes = propTypes;

export default BreadcrumbSqli;

