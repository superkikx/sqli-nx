import React from "react";
import propTypes from './breadcrumb.props'
import "./breadcrumb.css";

export const BreadcrumbSqli = (props) => {
    return (
      <nav className="breadcrumb">
          <ul className="list">
              <li className="list-item">
                  <a href={props.link}>{props.label}</a>
              </li>
          </ul>
      </nav>
  );
};
BreadcrumbSqli.propTypes = propTypes;

export default BreadcrumbSqli;

