/**
 * Modules
 */
import React from 'react';

/**
 * Components
 */
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';
import SelectField from './SelectField';

export default function FieldGroup({
  id,
  type,
  label,
  placeholder,
  items,
  defaultValue,
  help,
  ...props
}) {

  const fieldType =
    ['text', 'number', 'file', 'email', 'password'].includes(type)
    ? 'type'
    : 'componentClass';

  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      {
        type === 'select'
        ? (
          <SelectField
            {...{ placeholder }}
            {...{ items }}
            {...{ defaultValue }}
            {...props}
          />
        )
        : (
          <FormControl
            {...{ [fieldType]: type }}
            {...props}
          />
        )
      }

      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
