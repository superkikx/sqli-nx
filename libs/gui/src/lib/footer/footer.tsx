import React from "react";
import propTypes from './footer.props';

import "./footer.css";


export const Footer = (props) => {

  const background = props.background;
  const text = props.children;

  const styles = {
    backgroundColor: background
  };

  return (
    <footer style={styles} className="footer">
      <div>
        <h3> Contact : </h3>
        <a title="Contact" href="mailto:mailSQLI@sqli.com">
          mailSQLI@sqli.com
      </a>
        <div>
          SQLI : 166 Rue Jules Guesde, 92300 Levallois-Perret
      </div>
        <a href="tel:+00330185642020">Téléphone : 01 85 64 20 20</a>
      </div>
      <div>
        {text}
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  background: 'gray'
}
Footer.propTypes = propTypes
export default Footer;
