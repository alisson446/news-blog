/**
 * Modules
 */
import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

export default function SubmitButton({ tooltipMessage }) {
  const tooltip = (message) => (
    <Tooltip id="tooltip"> {message} </Tooltip>
  );

  return (
    <OverlayTrigger placement="top" overlay={tooltip(tooltipMessage)}>
      <button type="submit" className="submit-button">
        <FontAwesomeIcon size="2x" icon="arrow-circle-right" />
      </button>
    </OverlayTrigger>
  );
}
