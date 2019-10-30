import React from 'react';
import propTypes from './breadcrumb.props';
import './breadcrumb.css';

export const BreadcrumbSqli = props => {
  return (
    <nav className="breadcrumb">
      <ul className="list">
        {props.trail &&
          props.trail.map((link, indice) => (
            <li className="list-item" key={indice}>
              {typeof link.action === 'string' ? (
                <a href={link.action}>{link.label}</a>
              ) : (
                <a onClick={() => link.action(props)}>{link.label}</a>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};
BreadcrumbSqli.defaultProps = {
  trail: [
    {
      action: 'http://www.rorymcilroy.com/',
      label: 'Rory Mcilroy'
    },
    {
      action: 'https://twitter.com/kikxmachine',
      label: 'Superkikx'
    },
    {
      action: 'https://tigerwoods.com/',
      label: 'Tiger Woods'
    }
  ]
};
BreadcrumbSqli.propTypes = propTypes;

export default BreadcrumbSqli;
