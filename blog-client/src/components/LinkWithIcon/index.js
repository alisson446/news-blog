/**
 * Modules
 */
import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

export default function LinkWithIcon({ to, icon, ...props }) {
  return (
    <Link to={to}>
      <FontAwesomeIcon className="link-with-icon" size="2x" icon={icon} {...props} />
    </Link>
  );
}
